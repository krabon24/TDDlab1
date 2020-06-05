describe("Tests for ChangeHandler", function() {
    it("amount due is based on an argument", function() {
        let test = new ChangeHandler(1);
        expect(test.amountDue).toBe(1);
    });

    it("cashTendered is set to 0", function() {
        let test = new ChangeHandler(36);
        expect(test.cashTendered).toBe(0);
    });

    it("cashTender is increased when a quarter is inserted", function() {
        let withNewCoin = new ChangeHandler(25);
        withNewCoin.insertCoin("quarter");
        expect(withNewCoin.cashTendered).toBe(25);
    });

    it("cashTender is increased when a dime is inserted", function() {
        let withNewCoin = new ChangeHandler(10);
        withNewCoin.insertCoin("dime");
        expect(withNewCoin.cashTendered).toBe(10);
    });

    it("cashTender is increased when a nickel is inserted", function() {
        let withNewCoin = new ChangeHandler(5);
        withNewCoin.insertCoin("nickel");
        expect(withNewCoin.cashTendered).toBe(5);
    });

    it("cashTender is increased when a penny is inserted", function() {
        let withNewCoin = new ChangeHandler(1);
        withNewCoin.insertCoin("penny");
        expect(withNewCoin.cashTendered).toBe(1);
    });

    it("calling function multiple times adds to the amount", function() {
        let multipleCalls = new ChangeHandler(4);
        multipleCalls.insertCoin("penny");
        multipleCalls.insertCoin("quarter");
        multipleCalls.insertCoin("dime");
        multipleCalls.insertCoin("nickel");
        expect(multipleCalls.cashTendered).toBe(41);
    });
    
    it("returns true if cashTendered is more than amountDue", function() {
            let withNewCoin = new ChangeHandler({
                amountDue: 25,
                cashTendered: 50
            });
            const moreThan = withNewCoin.isPaymentSufficient();
            expect(moreThan).toBeTruthy;
        });
        
    it("returns false if cashTendered is less than amountDue", function() {
            let withNewCoin = new ChangeHandler({
                amountDue: 25,
                cashTendered: 11
            });
            const moreThan = withNewCoin.isPaymentSufficient();
            expect(moreThan).not.toBeTruthy;
        });

    it("returns true if cashTendered is equal to amountDue", function() {
            let withNewCoin = new ChangeHandler({
                amountDue: 25,
                cashTendered: 25
            });
            const equalTo = withNewCoin.isPaymentSufficient();
            expect(equalTo).toBeTruthy;
        });

    it("32 change produces 1 quarter, 0 dimes, 1 nickel and 2 pennies", function() {
        let newChangehandlere = new ChangeHandler(68);
        newChangehandlere.insertCoin("quarter")
        newChangehandlere.insertCoin("quarter")
        newChangehandlere.insertCoin("quarter")
        newChangehandlere.insertCoin("quarter")

        const giveChange = newChangehandlere.giveChange();
        expect(giveChange).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2})
    })

    it("10 change produces 0 quarter, 1 dimes, 0 nickel and 0 pennies", function() {
        let newChangehandlere = new ChangeHandler(10);
        newChangehandlere.insertCoin("dime")
        newChangehandlere.insertCoin("dime")

        const giveChange = newChangehandlere.giveChange();
        expect(giveChange).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0})
    })

    it("27 change produces 1 quarter, 0 dimes, 0 nickel and 2 pennies", function() {
        let newChangehandlere = new ChangeHandler(23);
        newChangehandlere.insertCoin("quarter")
        newChangehandlere.insertCoin("quarter")

        const giveChange = newChangehandlere.giveChange();
        expect(giveChange).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2})
    })

    it("68 change produces 2 quarter, 1 dimes, 1 nickel and 3 pennies", function() {
        let newChangehandlere = new ChangeHandler(32);
        newChangehandlere.insertCoin("quarter")
        newChangehandlere.insertCoin("quarter")
        newChangehandlere.insertCoin("quarter")
        newChangehandlere.insertCoin("quarter")

        const giveChange = newChangehandlere.giveChange();
        expect(giveChange).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3})
    })
})