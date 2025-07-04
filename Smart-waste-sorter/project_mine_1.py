# -*- coding: utf-8 -*-
"""project-mine-1

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1v4sHNm9-3VACu_N9zWc61kKF0YPnMWqC
"""

import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
import os

# Define the base directory path
base_dir = r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Unzip Dataset"

# Define the subdirectories for each waste type
classes = ["Light_Bulbs", "Paper", "Plastic", "Organic", "Glass", "Clothes", "Metal", "E-Waste"]

# Create subdirectories for each waste type
for cls in classes:
    class_dir = os.path.join(base_dir, cls)
    if not os.path.exists(class_dir):
        os.makedirs(class_dir)
    print(f'Subdirectory "{class_dir}" created successfully!')

# Print the contents of each subdirectory to verify
def print_directory_contents(dir_path):
    for root, dirs, files in os.walk(dir_path):
        for d in dirs:
            print(f'Directory: {os.path.join(root, d)}')
        for f in files:
            print(f'File: {os.path.join(root, f)}')

print("Base Directory Contents:")
print_directory_contents(base_dir)

import shutil
import os

# Define the base directory path
base_dir = r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Unzip Dataset"

# Define the paths to your images (source paths)
image_paths = {
    "Light_Bulbs": [r"/content/light_bulb1.jpg", r"/content/light_bulb2.jpg"],
    "Paper": [r"/content/paper1.jpg", r"/content/paper2.jpg"],
    "Plastic": [r"/content/plastic1.jpg", r"/content/plastic2.jpg"],
    "Organic": [r"/content/organic1.jpg", r"/content/organic2.jpg"],
    "Glass": [r"/content/glass1.jpg", r"/content/glass2.jpg"],
    "Clothes": [r"/content/clothes1.jpg", r"/content/clothes2.jpg"],
    "Metal": [r"/content/metal1.jpg", r"/content/metal2.jpg"],
    "E-Waste": [r"/content/e-waste1.jpg", r"/content/e-waste2.jpg"]
}

# Copy images to the corresponding subdirectories
for category, paths in image_paths.items():
    category_dir = os.path.join(base_dir, category)
    for img_path in paths:
        if os.path.exists(img_path):
            shutil.copy(img_path, category_dir)
            print(f'Copied {img_path} to {category_dir}')
        else:
            print(f'Image {img_path} does not exist')

print('All images copied successfully!')

import os

# Define the base directory path
base_dir = r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Unzip Dataset"

# Function to print the contents of each subdirectory
def print_directory_contents(dir_path):
    for root, dirs, files in os.walk(dir_path):
        print(f"\nDirectory: {root}")
        for f in files:
            print(f"File: {os.path.join(root, f)}")

print("Base Directory Contents:")
print_directory_contents(base_dir)

from tensorflow.keras.preprocessing.image import ImageDataGenerator

gen_train = ImageDataGenerator(
    rescale=1/255,
    shear_range=0.2,
    zoom_range=0.2,
    brightness_range=(0.1, 0.5),
    horizontal_flip=True
)

train_data = gen_train.flow_from_directory(
    r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Unzip Dataset",
    target_size=(224, 224),
    batch_size=32,
    class_mode="categorical"
)

print("Train data class indices:", train_data.class_indices)
print("Train data number of images:", train_data.samples)

# let's prepare the data and generate the data
from tensorflow.keras.preprocessing.image import ImageDataGenerator

gen_train = ImageDataGenerator(rescale=1/255, shear_range=0.2, zoom_range=0.2,
                               brightness_range=(0.1, 0.5), horizontal_flip=True)

train_data = gen_train.flow_from_directory(r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Unzip Dataset",
                                           target_size=(224, 224), batch_size=32, class_mode="categorical")

import zipfile
import os

# Specify the directory to be zipped
directory_to_zip = r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Plastic_Files"
zip_file_name = r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Dataset\plastic-20241002T093924Z-001.zip"

# Create a ZIP file
with zipfile.ZipFile(zip_file_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
    # Walk through the directory
    for root, dirs, files in os.walk(directory_to_zip):
        for file in files:
            # Create the complete filepath of the file in the directory
            file_path = os.path.join(root, file)
            # Add file to the ZIP file
            zipf.write(file_path, os.path.relpath(file_path, directory_to_zip))

print(f"ZIP file created successfully: {zip_file_name}")

import zipfile
import os

zip_path = r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Dataset\plastic-20241002T093924Z-001.zip"
output_path = r"C:\Users\mahesh\OneDrive\Desktop\waste_2\Unzip Dataset"

with zipfile.ZipFile(zip_path, 'r') as zip_ref:
    zip_ref.extractall(output_path)

# let's create a model
# here i'm going to use VGG16 model's parameter to solve this problem

from tensorflow.keras.applications.vgg16 import VGG16

# here i'm going to take input shape, weights and bias from imagenet and include top False means
# i want to add input, flatten and output layer by my self

vgg16 = VGG16(input_shape = (224, 224, 3), weights = "imagenet", include_top = False)

# now vgg16 weights are already train so i don't want to train that weights again
# so let's make trainable = False

for layer in vgg16.layers:
  layer.trainable = False

# let's add flatten layer or let's connect VGG16 with our own flatten layer

from tensorflow.keras import layers

x = layers.Flatten()(vgg16.output)

# now let's add output layers or prediction layer

prediction = layers.Dense(units = 8, activation="softmax")(x)

# creating a model object

model = tf.keras.models.Model(inputs = vgg16.input, outputs=prediction)
model.summary()

# now let's compile the model

model.compile(optimizer="adam", loss="categorical_crossentropy", metrics =["accuracy"])

result = model.fit(train_data, epochs=2, steps_per_epoch=len(train_data))

steps_per_epoch = len(train_data)  # Reduce steps_per_epoch to prevent running out of data

result = model.fit(train_data, epochs=2, steps_per_epoch=steps_per_epoch)

steps_per_epoch = len(train_data)
result = model.fit(train_data, epochs=1, steps_per_epoch=steps_per_epoch)

from tensorflow.keras.preprocessing import image
output_class = ["clothes", "e-waste", "glass", "light blubs", "metal", "organic", "paper", "plastic"]
def waste_prediction(new_image):
  test_image = image.load_img(new_image, target_size = (224,224))
  plt.axis("off")
  plt.imshow(test_image)
  plt.show()

  test_image = image.img_to_array(test_image) / 255
  test_image = np.expand_dims(test_image, axis=0)

  predicted_array = model.predict(test_image)
  predicted_value = output_class[np.argmax(predicted_array)]
  predicted_accuracy = round(np.max(predicted_array) * 100, 2)

  print("Your waste material is ", predicted_value, " with ", predicted_accuracy, " % accuracy")

waste_prediction("/content/test-ewaste.jpeg")

waste_prediction("/content/test-paper-waste.jpeg")

waste_prediction(r"/content/test-e-waste-image.webp")