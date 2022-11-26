export class Diet {
  dietCalculator(userInfo) {
    const {
      age,
      weight,
      height,
      gender,
      type,
      target,
      loseAmount,
      gainAmount,
      duration,
      activity,
    } = userInfo;

    //Calculating BMI
    const bmi = weight / (height * height);

    //Calculating ideal calories intake
    let activityFactor;
    if (activity === 'Inactive') {
      activityFactor = 1.2;
    } else if (activity === 'Slightly active') {
      activityFactor = 1.3;
    } else {
      activityFactor = 1.4;
    }

    let bmr;
    if (gender === 'Male') {
      bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
    } else {
      bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    }

    const idealCalories = bmr * activityFactor;
    let targetedCalories = idealCalories;

    if (target === 'loseWeight') {
      const deficitPerDay = (loseAmount * 7700) / (duration * 30);
      targetedCalories = targetedCalories - deficitPerDay;
    } else if (target === 'gainWeight') {
      const appendPerDay = (gainAmount * 7700) / (duration * 30);
      targetedCalories = targetedCalories + appendPerDay;
    }

    const breakfast = targetedCalories * 0.3;
    const midMeal = targetedCalories * 0.05;
    const beforeLunch = targetedCalories * 0.05;
    const lunch = targetedCalories * 0.25;
    const evening = targetedCalories * 0.1;
    const dinner = targetedCalories * 0.2;
    const afterDinner = targetedCalories * 0.05;

    let diet;
    if (type === 'nonVegetarian' && target === 'loseWeight') {
      diet = {
        clientId: 32434,
        water: 3,
        salt: 1,
        sugar: 3,
        oil: 5,
        targetToLose: 5,
        breakfast: {
          time: '8:00AM to 8:30AM',
          calories: breakfast,
          foods: [
            { id: 'lp-2', quantity: 120 },
            { id: 'fr-7', quantity: 85 },
            { id: 'fr-11', quantity: 23 },
          ],
        },
        midMeal: {
          time: '10:30AM to 11:00 AM',
          calories: midMeal,
          foods: [
            { id: 'wg-7', quantity: 120 },
            { id: 'id-2', quantity: 85 },
            { id: 'lp-1', quantity: 23 },
          ],
        },
        beforeLunch: {
          time: '12:00PM',
          calories: beforeLunch,
          foods: [{ id: 'ld-11', quantity: 120 }],
        },
        lunch: {
          time: '2:00PM to 2:30PM',
          calories: lunch,
          foods: [
            { id: 'wg-1', quantity: 120 },
            { id: 'ld-2', quantity: 85 },
            { id: 've-14', quantity: 23 },
            { id: 've-1', quantity: 23 },
            { id: 've-10', quantity: 3 },
            { id: 've-8', quantity: 3 },
            { id: 've-7', quantity: 3 },
            { id: 've-5', quantity: 23 },
            { id: 've-9', quantity: 23 },
            { id: 've-21', quantity: 3 },
          ],
        },
        evening: {
          time: '5:00 PM to 5:30PM',
          calories: evening,
          foods: [
            { id: 'fr-2', quantity: 120 },
            { id: 'fr-3', quantity: 120 },
          ],
        },
        Dinner: {
          time: '8:00-8:30PM',
          calories: dinner,
          foods: [
            { id: 'wg-2', quantity: 120 },
            { id: 'ld-2', quantity: 85 },
            { id: 've-14', quantity: 23 },
            { id: 've-4', quantity: 23 },
            { id: 've-10', quantity: 3 },
            { id: 've-3', quantity: 3 },
            { id: 've-7', quantity: 3 },
            { id: 've-5', quantity: 23 },
            { id: 've-9', quantity: 23 },
            { id: 've-21', quantity: 3 },
          ],
        },
        afterDinner: {
          time: '10:00PM to 10:30PM',
          calories: afterDinner,
          foods: [{ id: 'ld-11', quantity: 120 }],
        },

      };
    }
    console.log(diet);
    return diet;
  }

  getNumber() {
    return '4 is the number';
  }
}
