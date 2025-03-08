# AI-Powered Triage System for Emergency Rooms

This project implements an AI-powered triage system designed to streamline the triage process in emergency rooms by prioritizing patients based on the severity of their condition using machine learning techniques.

## Features
- *Patient Data Management*: Load, preprocess, and manage patient data from a CSV file.
- *Triage Classification*: The system determines a patient’s triage level based on their symptoms and vitals.
- *Machine Learning*: Utilizes a Random Forest Classifier to predict triage levels based on historical data.
- *Real-Time Data Integration*: Simulates real-time patient data and integrates it into the triage queue.
- *Graphical User Interface (GUI)*: Built with Tkinter to allow for easy data entry, display the patient queue, and visualize triage distribution.
- *Data Security*: Incorporates encryption and decryption of sensitive patient data using cryptography's Fernet module.

## Prerequisites
Install the necessary Python libraries using:
bash
pip install -r requirements.txt


requirements.txt includes:
- pandas
- numpy
- scikit-learn
- tkinter
- matplotlib
- seaborn
- cryptography

## Running the System

1. *Load Patient Data*: The patient data is loaded from a CSV file.
2. *Preprocess the Data*: The data undergoes preprocessing, which includes imputation of missing values, scaling of numeric data, and encoding of categorical variables.
3. *Model Training*: The system trains a Random Forest Classifier to predict triage levels.
4. *GUI*: The user can input new patient data via the GUI and view real-time updates of the triage queue and distribution graph.

To run the program:
bash
python main.py


## GUI Overview
The GUI enables the user to:
- Enter patient details like age, gender, symptoms, and vitals.
- View the patient queue sorted by triage level.
- See a graphical representation of the current triage level distribution.

## Encryption & Decryption
Patient data is encrypted using the Fernet encryption system to ensure confidentiality.

---
## MADE BY https://github.com/realavinashupadhyay ,https://www.linkedin.com/in/realavinashupadhyay/
This structure includes essential project details, setup instructions, and how to run the system. 