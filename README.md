# Folkatech - Quality Assurance Automation Assessment

This repository contains answers to the assessment for automated testing, which covers the following areas:

1. **Automated Test Case for Login Feature**
2. **API Testing Automation**
3. **Performance Testing**

## Folder Structure

- **`automated-tests/`**  
  Contains the answers for:
  1. Automated test script for the **Login Feature**.
  2. Automated test script for **API Testing**.

- **`performance-test/`**  
  Contains the answer for **Performance Testing** using JMeter on the API endpoint.

## Details

### 1. Automated Test Case for Login Feature
- Location: `automated-tests/`
- Implements a script to test the login feature of the "Lapor!" application.
- **Scenarios:**
  - **Positive:** Tests successful login with valid credentials.
  - **Negative:** Tests failed login with invalid credentials and checks for the appropriate error message.
- **Tools:** Playwright

### 2. API Testing Automation
- Location: `automated-tests/`
- Implements a script to test the API endpoint for submitting reports in "Lapor!".
- **Scenarios:**
  - **Positive:** Submitting a new report with valid data and receiving a successful response.
  - **Negative:** Attempting to submit a report with incomplete data and receiving an appropriate error response.
- **Tools:** Playwright

### 3. Performance Testing
- Location: `performance-test/`
- Performs performance testing on the API "Laporkan!" using JMeter.
- **Test Plan:**
  - Simulates 100 users submitting reports concurrently.
  - Measures response time and throughput.
  - Analyzes bottlenecks during high load.
- **Tools:** JMeter to generate the load and collect performance metrics.

## How to Run
- For **Automated Test Cases** (Login and API Testing), navigate to `automated-tests/` and follow the setup instructions within the folder.
- For **Performance Testing**, navigate to `performance-test/` and run the JMeter test plan.

## Results
- Each test includes result outputs, such as screenshots, JSON responses, and performance graphs, stored in the respective project folder.

