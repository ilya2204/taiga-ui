import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    EXAMPLE_ID,
} from '../../../support/shared.entities';

describe('Tabs', () => {
    it('No extra margin after the last tab', () => {
        cy.viewport(1700, 900);
        cy.tuiVisit('/navigation/tabs');

        cy.get('#complex')
            .findByAutomationId(EXAMPLE_ID)
            .tuiScrollIntoView()
            .matchImageSnapshot('01-[wide-screen]-[no-margin-last-tab]');
    });

    describe('Clamp active index', () => {
        for (const index of [-2, -1, 0, 1, 2, 3, 4, 5, 100, 1000]) {
            it(`activeItemIndex=${index}`, () => {
                cy.tuiVisit(`/navigation/tabs/API?tuiMode=null&activeItemIndex=${index}`);

                cy.get('#demoContent')
                    .tuiScrollIntoView()
                    .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                    .matchImageSnapshot(`02-activeItemIndex-${index}`);
            });
        }
    });
});
