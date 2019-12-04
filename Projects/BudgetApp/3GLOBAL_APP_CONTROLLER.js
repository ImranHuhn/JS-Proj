// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl) {

    var setupEventListeners = function() {
        var DOM = uiCtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keycode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', uiCtrl.changedType);

    };
    
    var updateBudget = function() {
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI
        uiCtrl.displayBudget(budget);
    };

    var updatePercentages = function() {
        //1. calculate percentages
        budgetCtrl.calculatePercentages();
        //2. read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();
        //3. update the ui with the new percentages
        uiCtrl.displayPercentages(percentages);
    };

    var ctrlAddItem = function() {
        var input, newItem;
        
        // 1. Get the field input data
        input = uiCtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            uiCtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            uiCtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();

            //6. calculate and update percentages
            updatePercentages();
        }
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {
            // inc-1 
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Delete the item fom the data structure
            budgetCtrl.deleteItem(type, ID);
            // 2. Delete the item from the UI
            uiCtrl.deleteListItem(itemID);
            // 3. Update and how the new budget
            updateBudget();
            //4. calculate and update percentages
            updatePercentages();
}

    };

    return {
        init: function() {
            console.log('Application has started.');
            uiCtrl.displayMonth();
            uiCtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }    

})(budgetController, uiController);

controller.init();