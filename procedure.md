
1. First click on **DATASET** tab.
2. Select the testing data to predict its class, and then click the **ADD** button.
3. Now, click on the **NEXT** button to initiate the training phase for the Naive Bayes model.
4. Enter the occurrences of Yes(h) and No(-h) from the DATASET to calculate Prior Probabilities, then click **SUBMIT**.
5. Click on the **NEXT** button to calculate Likelihood Probabilities for every word in the testing data.
6. Input the number of times the word occurs in documents labeled with the specific class (Yes), and then click the **SUBMIT** button.      
7. Now, follow the same procedure for class No. Now, click on **NEXT** to proceed further.
8. If any keywords is not present in training data, then apply **LAPLACE SMOOTHING**.
9. Calculate the Posterior Probability by entering the required values for P(h|d₇) and click on the **SUBMIT** button.
    <ul type="circle">
    <li>Click on the <b>'Prior Probability'</b> tab given on the left side of the page to view the required values.</li>
    <li>Next, click on the <b>'Likelihood Probability'</b> tab and and observe the necessary values.</li>
    </ul>

10. Repeat the previous step(7) to calculate the Posterior Probability for P(-h|d₇).
11. After submitting the values, click on the **NEXT** button to access the final result.