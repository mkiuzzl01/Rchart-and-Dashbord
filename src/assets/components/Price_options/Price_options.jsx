import Price_option from "./Price_option/Price_option";

const Price_options = () => {
  const  membership_options = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30,
          "features": [
            "Access to gym facilities during off-peak hours",
            "Limited access to group classes",
            "Access to cardio equipment",
            "Access to weightlifting equipment"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 50,
          "features": [
            "Access to gym facilities during all operating hours",
            "Access to group classes",
            "Access to cardio equipment",
            "Access to weightlifting equipment",
            "Access to swimming pool"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 80,
          "features": [
            "Access to gym facilities during all operating hours",
            "Access to group classes",
            "Access to cardio equipment",
            "Access to weightlifting equipment",
            "Access to swimming pool",
            "Sauna access",
            "Personal trainer sessions",
            "Nutritional counseling"
          ]
        }
      ]
    return (
        <div className="grid lg:grid-cols-3">
            {
              membership_options.map((option) => <Price_option key={option.id} option={option}></Price_option>)
            }
        </div>
    );
};

export default Price_options;