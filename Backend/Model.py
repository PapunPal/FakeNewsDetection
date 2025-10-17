# Step 1: Import libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping
import pickle

# Step 2: Load CSV files
fake = pd.read_csv("Fake.csv")
real = pd.read_csv("Real.csv")

# Step 3: Add labels
fake["label"] = "FAKE"
real["label"] = "REAL"

# Step 4: Combine datasets and shuffle
data = pd.concat([fake, real], axis=0)
data = data.sample(frac=1).reset_index(drop=True)

# Step 5: Combine title + text
data["content"] = data["title"] + " " + data["text"]

# Step 6: Encode labels (FAKE=0, REAL=1)
le = LabelEncoder()
data["label_encoded"] = le.fit_transform(data["label"])

# Step 7: Split data into train/test
X_train, X_test, y_train, y_test = train_test_split(
    data["content"], data["label_encoded"], test_size=0.2, random_state=42
)

# Step 8: Tokenize text
max_words = 10000  # max vocabulary size
max_len = 200      # max sequence length

tokenizer = Tokenizer(num_words=max_words, oov_token="<OOV>")
tokenizer.fit_on_texts(X_train)

X_train_seq = tokenizer.texts_to_sequences(X_train)
X_test_seq = tokenizer.texts_to_sequences(X_test)

# Step 9: Pad sequences
X_train_pad = pad_sequences(X_train_seq, maxlen=max_len, padding='post', truncating='post')
X_test_pad = pad_sequences(X_test_seq, maxlen=max_len, padding='post', truncating='post')

# Step 10: Build LSTM model
embedding_dim = 128

model = Sequential()
model.add(Embedding(input_dim=max_words, output_dim=embedding_dim, input_length=max_len))
model.add(LSTM(128, dropout=0.2, recurrent_dropout=0.2))
model.add(Dense(1, activation='sigmoid'))

model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])
model.summary()

# Step 11: Train the model
es = EarlyStopping(monitor='val_loss', patience=3, restore_best_weights=True)

history = model.fit(
    X_train_pad, y_train,
    epochs=10,
    batch_size=64,
    validation_split=0.2,
    callbacks=[es]
)

# Step 12: Evaluate the model
loss, accuracy = model.evaluate(X_test_pad, y_test)
print("\n🎯 Test Accuracy:", accuracy)

# Step 13: Save tokenizer and model for future use
model.save("fake_news_lstm_model.h5")

with open("tokenizer.pkl", "wb") as f:
    pickle.dump(tokenizer, f)

print("\n✅ LSTM model and tokenizer saved successfully!")

# Step 14: Test with new example
sample_text = ["Breaking news: government announces new economic reform"]
sample_seq = tokenizer.texts_to_sequences(sample_text)
sample_pad = pad_sequences(sample_seq, maxlen=max_len, padding='post', truncating='post')
prediction = model.predict(sample_pad)[0][0]
pred_label = "REAL" if prediction >= 0.5 else "FAKE"
print("\n📰 Sample Prediction:", pred_label)
