document.addEventListener("DOMContentLoaded", () => {


    /* ========================================
       PRELOADER
    ======================================== */

    const preloader = document.getElementById("preloader");

    if (preloader) {

        window.addEventListener("load", () => {

            setTimeout(() => {
                preloader.classList.add("loaded");
            }, 3200);

        });

    }



    /* ========================================
       MOBILE NAVIGATION
    ======================================== */

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mainNav =
        document.getElementById("mainNav");


    if (mobileMenuBtn && mainNav) {

        mobileMenuBtn.addEventListener("click", () => {

            mainNav.classList.toggle("active");

        });

    }



    /* ========================================
       Cake ORDER FORM
    ======================================== */

    const orderForm =
        document.getElementById("cakeOrderForm");


    if (!orderForm) {
        return;
    }



    /* ========================================
       FORM ELEMENTS
    ======================================== */

    const cakeType =
        document.getElementById("cakeType");

    const layerCountField =
    document.getElementById("layerCountField");

    const layerCount =
    document.getElementById("layerCount");

    const layerCountLabel =
    document.querySelector(
        'label[for="layerCount"]'
    );

    const cakeFlavor =
        document.getElementById("cakeFlavor");


    const icingBase =
        document.getElementById("icingBase");


    const icingFlavor =
        document.getElementById("icingFlavor");

 const otherIcingFlavorField =
    document.getElementById("otherIcingFlavorField");

const otherIcingFlavor =
    document.getElementById("otherIcingFlavor");

    const eventDate =
        document.getElementById("eventDate");


    const rushMessage =
        document.getElementById("rushMessage");


    const icingMessage =
        document.getElementById("icingMessage");

        const marbleFlavorField =
    document.getElementById("marbleFlavorField");

const marbleFlavorOne =
    document.getElementById("marbleFlavorOne");

const marbleFlavorTwo =
    document.getElementById("marbleFlavorTwo");

const marbleFlavorMessage =
    document.getElementById("marbleFlavorMessage");

    const otherFlavorField =
    document.getElementById("otherFlavorField");

const otherFlavor =
    document.getElementById("otherFlavor");

        const germanChocolateField =
    document.getElementById("germanChocolateField");

const germanChocolateNutRadios =
    document.querySelectorAll(
        'input[name="germanChocolateNut"]'
    );
const cakeFlavorField =
    cakeFlavor.closest(".order-field");

const icingBaseField =
    icingBase.closest(".order-field");

const icingFlavorField =
    icingFlavor.closest(".order-field");

        const bundtOption =
    document.getElementById("bundtOption");

const bundtOptionsField =
    document.getElementById("bundtOptionsField");

const bundtCustomQuantityField =
    document.getElementById("bundtCustomQuantityField");

const bundtCustomQuantity =
    document.getElementById("bundtCustomQuantity");

    const bentoFlavorChoiceField =
    document.getElementById("bentoFlavorChoiceField");

const bentoSameFlavorRadios =
    document.querySelectorAll(
        'input[name="bentoSameFlavor"]'
    );

const bentoCupcakeFlavorField =
    document.getElementById("bentoCupcakeFlavorField");

const bentoCupcakeFlavor =
    document.getElementById("bentoCupcakeFlavor");

const bentoIcingChoiceField =
    document.getElementById("bentoIcingChoiceField");

const bentoSameIcingRadios =
    document.querySelectorAll(
        'input[name="bentoSameIcing"]'
    );

const bentoCupcakeIcingBaseField =
    document.getElementById("bentoCupcakeIcingBaseField");

const bentoCupcakeIcingBase =
    document.getElementById("bentoCupcakeIcingBase");

const bentoCupcakeIcingFlavorField =
    document.getElementById("bentoCupcakeIcingFlavorField");

const bentoCupcakeIcingFlavor =
    document.getElementById("bentoCupcakeIcingFlavor");

const cakeFlavorLabel =
    document.querySelector('label[for="cakeFlavor"]');

const icingBaseLabel =
    document.querySelector('label[for="icingBase"]');

const icingFlavorLabel =
    document.querySelector('label[for="icingFlavor"]');

    const tastingBundleField =
    document.getElementById("tastingBundleField");

const tastingFlavors = [
    document.getElementById("tastingFlavor1"),
    document.getElementById("tastingFlavor2"),
    document.getElementById("tastingFlavor3"),
    document.getElementById("tastingFlavor4")
];

const tastingIcingBases = [
    document.getElementById("tastingIcingBase1"),
    document.getElementById("tastingIcingBase2"),
    document.getElementById("tastingIcingBase3"),
    document.getElementById("tastingIcingBase4")
];

const tastingIcingFlavors = [
    document.getElementById("tastingIcingFlavor1"),
    document.getElementById("tastingIcingFlavor2"),
    document.getElementById("tastingIcingFlavor3"),
    document.getElementById("tastingIcingFlavor4")
];

const addAnotherCakeButton =
    document.getElementById("addAnotherCake");

const savedCakesContainer =
    document.getElementById("savedCakes");

const cakeTypeSection =
    cakeType.closest(".order-form-section");

const flavorSection =
    cakeFlavor.closest(".order-form-section");

const cakeTheme =
    document.getElementById("cakeTheme");

const designSection =
    cakeTheme.closest(".order-form-section");

let savedCakes = [];


    /* ========================================
       CONDITIONAL CAKE FIELDS
    ======================================== */

    const cakeFields = {

        round:
            document.getElementById("roundSizeField"),

        heart:
            document.getElementById("heartSizeField"),

        star:
            document.getElementById("starSizeField"),

        sheet:
            document.getElementById("sheetSizeField"),

        cupcakes:
            document.getElementById("cupcakeQuantityField"),

        bundt:
        document.getElementById("bundtOptionsField"),

        specialty:
            document.getElementById("specialtyCakeField")

    };



    /* ========================================
       HIDE ALL CAKE FIELDS
    ======================================== */

    function hideCakeFields() {

        Object.values(cakeFields).forEach((field) => {

            if (field) {
                field.classList.remove("active");
            }

        });

    }

   /* ========================================
   LAYER COUNT LOGIC
    ======================================== */

function updateLayerOptions() {

    const selectedType = cakeType.value;

    const roundSize =
        document.getElementById("roundSize");

    // Reset field first

    layerCountField.classList.remove("active");

    layerCount.required = false;

    layerCount.innerHTML =
        '<option value="">Select layers</option>';

    layerCountLabel.textContent =
        "Number of Layers *";


    // ROUND CAKES

    if (selectedType === "round") {

        if (!roundSize.value) {
            return;
        }

        layerCountField.classList.add("active");
        layerCount.required = true;

        if (
            roundSize.value === "4" ||
            roundSize.value === "6"
        ) {
            addLayerOptions([2, 3]);
        }

        else if (
            roundSize.value === "8" ||
            roundSize.value === "10"
        ) {
            addLayerOptions([2, 3, 4]);
        }

        return;
    }


    // HEART, STAR & SHEET

    if (
        selectedType === "heart" ||
        selectedType === "star" ||
        selectedType === "sheet"
    ) {
        layerCountField.classList.add("active");
        layerCount.required = true;

        addLayerOptions([2, 3, 4]);

        return;
    }


    // BENTO BOX

    if (selectedType === "bento") {

        layerCountField.classList.add("active");
        layerCount.required = true;

        layerCountLabel.textContent =
            "Mini Cake Layers *";

        addLayerOptions([2, 3]);
    }
}


function addLayerOptions(options) {

    options.forEach((layers) => {

        const option =
            document.createElement("option");

        option.value = layers;

        option.textContent =
            `${layers} Layers`;

        layerCount.appendChild(option);
    });
}

    /* ========================================
       CAKE TYPE LOGIC
    ======================================== */

    cakeType.addEventListener("change", () => {

        hideCakeFields();

        bundtCustomQuantityField.classList.remove("active");
        bundtCustomQuantity.required = false;
        bundtCustomQuantity.value = "";

        const selectedType =
            cakeType.value;


        if (cakeFields[selectedType]) {

            cakeFields[selectedType]
                .classList.add("active");

        }

        updateLayerOptions();
        updateBentoLogic();
        updateTastingBundle();
        updateEstimate();

    });

     const roundSize =
    document.getElementById("roundSize");

      if (roundSize) {

    roundSize.addEventListener(
        "change",
        updateLayerOptions
    );
         }


if (bundtOption) {

    bundtOption.addEventListener("change", () => {

        bundtCustomQuantityField.classList.remove("active");
        bundtCustomQuantity.required = false;
        bundtCustomQuantity.value = "";

        if (bundtOption.value === "mini-other") {

            bundtCustomQuantityField.classList.add("active");

            bundtCustomQuantity.required = true;
        }

        updateEstimate();
    });
}
    /* ========================================
       ALLERGY LOGIC
    ======================================== */

    const allergyRadios =
        document.querySelectorAll(
            'input[name="hasAllergies"]'
        );


    const allergyDetailsField =
        document.getElementById(
            "allergyDetailsField"
        );


    const allergyDetails =
        document.getElementById(
            "allergyDetails"
        );


    allergyRadios.forEach((radio) => {

        radio.addEventListener("change", () => {

            if (radio.value === "yes" && radio.checked) {

                allergyDetailsField
                    .classList.add("active");

                allergyDetails.required = true;

            }


            if (radio.value === "no" && radio.checked) {

                allergyDetailsField
                    .classList.remove("active");

                allergyDetails.required = false;

                allergyDetails.value = "";

            }

        });

    });



    /* ========================================
       PICKUP / DELIVERY LOGIC
    ======================================== */

    const fulfillmentRadios =
        document.querySelectorAll(
            'input[name="fulfillment"]'
        );


    const deliveryFields =
        document.getElementById(
            "deliveryFields"
        );


    const meetupFields =
        document.getElementById(
            "meetupFields"
        );


    const deliveryAddress =
        document.getElementById(
            "deliveryAddress"
        );


    const deliveryCity =
        document.getElementById(
            "deliveryCity"
        );


    const deliveryZip =
        document.getElementById(
            "deliveryZip"
        );


    fulfillmentRadios.forEach((radio) => {

        radio.addEventListener("change", () => {


            deliveryFields.classList.remove("active");

            meetupFields.classList.remove("active");


            deliveryAddress.required = false;

            deliveryCity.required = false;

            deliveryZip.required = false;


            if (
                radio.value === "delivery" &&
                radio.checked
            ) {

                deliveryFields.classList.add("active");

                deliveryAddress.required = true;

                deliveryCity.required = true;

                deliveryZip.required = true;

            }


            if (
                radio.value === "meetup" &&
                radio.checked
            ) {

                meetupFields.classList.add("active");

            }


            updateEstimate();

        });

    });

      /* ========================================
   MARBLE FLAVOR LOGIC
======================================== */

function updateMarbleFlavorOptions() {

    const isMarble =
        cakeFlavor.value === "marble";

    if (isMarble) {

        marbleFlavorField.classList.add("active");

        marbleFlavorOne.required = true;
        marbleFlavorTwo.required = true;

    } else {

        marbleFlavorField.classList.remove("active");

        marbleFlavorOne.required = false;
        marbleFlavorTwo.required = false;

        marbleFlavorOne.value = "";
        marbleFlavorTwo.value = "";

        marbleFlavorMessage.textContent = "";
        marbleFlavorMessage.classList.remove("active");
    }
}


function validateMarbleFlavors() {

    if (
        cakeFlavor.value === "marble" &&
        marbleFlavorOne.value &&
        marbleFlavorTwo.value &&
        marbleFlavorOne.value === marbleFlavorTwo.value
    ) {

        marbleFlavorMessage.textContent =
            "Please select two different flavors.";

        marbleFlavorMessage.classList.add("active");

        marbleFlavorTwo.setCustomValidity(
            "Please select a different flavor."
        );

    } else {

        marbleFlavorMessage.textContent = "";
        marbleFlavorMessage.classList.remove("active");

        marbleFlavorTwo.setCustomValidity("");
    }
}


cakeFlavor.addEventListener("change", () => {

    updateMarbleFlavorOptions();

    validateMarbleFlavors();
});


marbleFlavorOne.addEventListener(
    "change",
    validateMarbleFlavors
);


marbleFlavorTwo.addEventListener(
    "change",
    validateMarbleFlavors
);

/* ========================================
   OTHER / CUSTOM FLAVOR LOGIC
======================================== */

function updateOtherFlavor() {

    const isOtherFlavor =
        cakeFlavor.value === "other";

    if (isOtherFlavor) {

        otherFlavorField.classList.add("active");

        otherFlavor.required = true;

    } else {

        otherFlavorField.classList.remove("active");

        otherFlavor.required = false;

        otherFlavor.value = "";
    }
}

cakeFlavor.addEventListener("change", () => {

    updateOtherFlavor();

});

/* ========================================
   OTHER / CUSTOM ICING FLAVOR LOGIC
======================================== */

function updateOtherIcingFlavor() {

    const isOtherIcingFlavor =
        icingFlavor.value === "other";

    if (isOtherIcingFlavor) {

        otherIcingFlavorField.classList.add("active");
        otherIcingFlavor.required = true;

    } else {

        otherIcingFlavorField.classList.remove("active");
        otherIcingFlavor.required = false;
        otherIcingFlavor.value = "";
    }
}


icingFlavor.addEventListener("change", () => {

    updateOtherIcingFlavor();

});

/* ========================================
   BENTO BOX LOGIC
======================================== */

function copySelectOptions(source, target) {

    target.innerHTML = source.innerHTML;
}


copySelectOptions(
    cakeFlavor,
    bentoCupcakeFlavor
);

copySelectOptions(
    icingBase,
    bentoCupcakeIcingBase
);

copySelectOptions(
    icingFlavor,
    bentoCupcakeIcingFlavor
);


function resetBentoLogic() {

    bentoFlavorChoiceField.classList.remove("active");
    bentoIcingChoiceField.classList.remove("active");

    bentoCupcakeFlavorField.classList.remove("active");

    bentoCupcakeIcingBaseField.classList.remove("active");
    bentoCupcakeIcingFlavorField.classList.remove("active");

    bentoSameFlavorRadios.forEach((radio) => {
        radio.required = false;
        radio.checked = false;
    });

    bentoSameIcingRadios.forEach((radio) => {
        radio.required = false;
        radio.checked = false;
    });

    bentoCupcakeFlavor.required = false;
    bentoCupcakeIcingBase.required = false;
    bentoCupcakeIcingFlavor.required = false;

    bentoCupcakeFlavor.value = "";
    bentoCupcakeIcingBase.value = "";
    bentoCupcakeIcingFlavor.value = "";

    cakeFlavorLabel.textContent =
        "Cake Flavor *";

    icingBaseLabel.textContent =
        "Icing Base *";

    icingFlavorLabel.textContent =
        "Icing Flavor *";
}


function updateBentoLogic() {

    resetBentoLogic();

    if (cakeType.value !== "bento") {
        return;
    }

    bentoFlavorChoiceField.classList.add("active");
    bentoIcingChoiceField.classList.add("active");

    bentoSameFlavorRadios.forEach((radio) => {
        radio.required = true;
    });

    bentoSameIcingRadios.forEach((radio) => {
        radio.required = true;
    });

    cakeFlavorLabel.textContent =
        "Mini Cake Flavor *";

    icingBaseLabel.textContent =
        "Mini Cake Icing Base *";

    icingFlavorLabel.textContent =
        "Mini Cake Icing Flavor *";
}

bentoSameFlavorRadios.forEach((radio) => {

    radio.addEventListener("change", () => {

        bentoCupcakeFlavorField.classList.remove("active");
        bentoCupcakeFlavor.required = false;
        bentoCupcakeFlavor.value = "";

        if (
            radio.checked &&
            radio.value === "no"
        ) {

            bentoCupcakeFlavorField.classList.add("active");
            bentoCupcakeFlavor.required = true;
        }
    });
});


bentoSameIcingRadios.forEach((radio) => {

    radio.addEventListener("change", () => {

        bentoCupcakeIcingBaseField.classList.remove("active");
        bentoCupcakeIcingFlavorField.classList.remove("active");

        bentoCupcakeIcingBase.required = false;
        bentoCupcakeIcingFlavor.required = false;

        bentoCupcakeIcingBase.value = "";
        bentoCupcakeIcingFlavor.value = "";

        if (
            radio.checked &&
            radio.value === "no"
        ) {

            bentoCupcakeIcingBaseField.classList.add("active");
            bentoCupcakeIcingFlavorField.classList.add("active");

            bentoCupcakeIcingBase.required = true;
            bentoCupcakeIcingFlavor.required = true;
        }
    });
});

/* ========================================
   CAKE TASTING BUNDLE LOGIC
======================================== */

function setupTastingBundleOptions() {

    tastingFlavors.forEach((select) => {
        select.innerHTML = cakeFlavor.innerHTML;
    });

    tastingIcingBases.forEach((select) => {
        select.innerHTML = icingBase.innerHTML;
    });

    tastingIcingFlavors.forEach((select) => {
        select.innerHTML = icingFlavor.innerHTML;
    });
}


setupTastingBundleOptions();


function resetTastingBundle() {

    tastingBundleField.classList.remove("active");

    tastingFlavors.forEach((select) => {
        select.required = false;
        select.value = "";
    });

    tastingIcingBases.forEach((select) => {
        select.required = false;
        select.value = "";
    });

    tastingIcingFlavors.forEach((select) => {
        select.required = false;
        select.value = "";
    });

    cakeFlavorField.style.display = "";
    icingBaseField.style.display = "";
    icingFlavorField.style.display = "";

    cakeFlavor.required = true;
    icingBase.required = true;
    icingFlavor.required = true;
}


function updateTastingBundle() {

    resetTastingBundle();

    if (cakeType.value !== "tasting") {
        return;
    }

    tastingBundleField.classList.add("active");

    cakeFlavorField.style.display = "none";
    icingBaseField.style.display = "none";
    icingFlavorField.style.display = "none";

    cakeFlavor.required = false;
    icingBase.required = false;
    icingFlavor.required = false;

    cakeFlavor.value = "";
    icingBase.value = "";
    icingFlavor.value = "";

    tastingFlavors.forEach((select) => {
        select.required = true;
    });

    tastingIcingBases.forEach((select) => {
        select.required = true;
    });

    tastingIcingFlavors.forEach((select) => {
        select.required = true;
    });
}

/* ========================================
   ADD ANOTHER CAKE
======================================== */

function getCakeFieldData() {

    const cakeSections = [
        cakeTypeSection,
        flavorSection,
        designSection
    ];

    const cakeData = {};

    cakeSections.forEach((section) => {

        const fields =
            section.querySelectorAll(
                "input, select, textarea"
            );

        fields.forEach((field) => {

            if (!field.name) {
                return;
            }

            // File uploads stay attached to the overall order.
            if (field.type === "file") {
                return;
            }

            if (
                field.type === "checkbox" ||
                field.type === "radio"
            ) {

                if (!field.checked) {
                    return;
                }

                if (cakeData[field.name]) {

                    if (!Array.isArray(cakeData[field.name])) {
                        cakeData[field.name] = [
                            cakeData[field.name]
                        ];
                    }

                    cakeData[field.name].push(
                        field.value || "Yes"
                    );

                } else {

                    cakeData[field.name] =
                        field.value || "Yes";
                }

                return;
            }

            if (field.value) {

                cakeData[field.name] =
                    field.options
                        ? field.options[
                            field.selectedIndex
                        ].text
                        : field.value;
            }

        });

    });

    return cakeData;
}


function resetCakeBuilder() {

    const cakeSections = [
        cakeTypeSection,
        flavorSection,
        designSection
    ];

    cakeSections.forEach((section) => {

        const fields =
            section.querySelectorAll(
                "input, select, textarea"
            );

        fields.forEach((field) => {

            // Keep inspiration images attached
            // to the overall order.
            if (field.type === "file") {
                return;
            }

            if (
                field.type === "checkbox" ||
                field.type === "radio"
            ) {

                field.checked = false;

            } else {

                field.value = "";
            }

        });

    });


    // Reset smart logic

    hideCakeFields();

    bundtCustomQuantityField
        .classList.remove("active");

    bundtCustomQuantity.required = false;

    updateLayerOptions();

    updateBentoLogic();

    updateTastingBundle();

    updateMarbleFlavorOptions();

    updateOtherFlavor();

    updateOtherIcingFlavor();


    // Reset German Chocolate

    germanChocolateField
        .classList.remove("active");

    germanChocolateNutRadios.forEach((radio) => {
        radio.required = false;
        radio.checked = false;
    });

    cakeFlavorField.style.display = "";
    icingBaseField.style.display = "";
    icingFlavorField.style.display = "";

    cakeFlavor.required = true;
    icingBase.required = true;
    icingFlavor.required = true;


    // Clear messages

    icingMessage.textContent = "";
    icingMessage.classList.remove("active");

    marbleFlavorMessage.textContent = "";
    marbleFlavorMessage.classList.remove("active");


    updateEstimate();
}


function renderSavedCakes() {

    savedCakesContainer.innerHTML = "";

    savedCakes.forEach((cake, index) => {

        const card =
            document.createElement("div");

        card.classList.add("saved-cake");


        const title =
            document.createElement("h3");

        title.textContent =
            `Cake ${index + 1} Saved`;


        const details =
            document.createElement("p");

        const product =
            cake.cakeType || "Cake";

        const flavor =
            cake.cakeFlavor || "";

        details.textContent =
            flavor
                ? `${product} — ${flavor}`
                : product;


        const removeButton =
            document.createElement("button");

        removeButton.type = "button";

        removeButton.className =
            "btn btn-secondary";

        removeButton.textContent =
            "Remove Cake";

        removeButton.addEventListener(
            "click",
            () => {

                savedCakes.splice(index, 1);

                renderSavedCakes();
            }
        );


        card.appendChild(title);
        card.appendChild(details);
        card.appendChild(removeButton);

        savedCakesContainer.appendChild(card);

    });
}


if (addAnotherCakeButton) {

    addAnotherCakeButton.addEventListener(
        "click",
        () => {

            if (!cakeType.value) {

                cakeType.reportValidity();

                return;
            }


            if (!cakeTheme.value) {

                cakeTheme.reportValidity();

                return;
            }


            const cakeData =
                getCakeFieldData();

            savedCakes.push(cakeData);

            renderSavedCakes();

            resetCakeBuilder();


            cakeType.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );
}

       /* ========================================
   GERMAN CHOCOLATE LOGIC
======================================== */

cakeFlavor.addEventListener("change", () => {

    const isGermanChocolate =
        cakeFlavor.value === "german-chocolate";


    if (isGermanChocolate) {

        germanChocolateField.classList.add("active");

        icingBaseField.style.display = "none";
        icingFlavorField.style.display = "none";

        icingBase.required = false;
        icingFlavor.required = false;

        icingBase.value = "";
        icingFlavor.value = "";

        icingMessage.textContent = "";
        icingMessage.classList.remove("active");

        germanChocolateNutRadios.forEach((radio) => {
            radio.required = true;
        });

    } else {

        germanChocolateField.classList.remove("active");

        icingBaseField.style.display = "";
        icingFlavorField.style.display = "";

        icingBase.required = true;
        icingFlavor.required = true;

        germanChocolateNutRadios.forEach((radio) => {
            radio.required = false;
            radio.checked = false;
        });
    }

    updateEstimate();
});

    /* ========================================
       CREAM CHEESE NOTE
    ======================================== */

    icingBase.addEventListener("change", () => {

        if (
            icingBase.value === "cream-cheese"
        ) {

            icingMessage.textContent =
                "Cream cheese icing cannot be used for piping/decorating cakes.";

            icingMessage.classList.add("active");

        }

        else {

            icingMessage.textContent = "";

            icingMessage.classList.remove("active");

        }


        updateEstimate();

    });



    /* ========================================
       RUSH ORDER CHECK
    ======================================== */

    eventDate.addEventListener("change", () => {

        if (!eventDate.value) {
            return;
        }


        const selectedDate =
            new Date(
                eventDate.value + "T00:00:00"
            );


        const today = new Date();


        today.setHours(
            0,
            0,
            0,
            0
        );


        const difference =
            selectedDate - today;


        const daysAway =
            Math.ceil(
                difference /
                (1000 * 60 * 60 * 24)
            );


        if (daysAway < 0) {

            rushMessage.textContent =
                "Please select a future date.";

            rushMessage.classList.add("active");

            return;

        }


        if (daysAway < 5) {

            rushMessage.textContent =
                "This request may require rush-order pricing and is subject to availability.";

            rushMessage.classList.add("active");

        }

        else if (daysAway <= 7) {

            rushMessage.textContent =
                "This date falls within the preferred 5–7 day minimum lead time.";

            rushMessage.classList.remove("active");

        }

        else {

            rushMessage.textContent = "";

            rushMessage.classList.remove("active");

        }

    });



    /* ========================================
       PRICING CONFIGURATION
    ========================================

       WHEN YOU FINALIZE PRICING,
       THIS IS THE MAIN AREA WE WILL UPDATE.

       null = price not configured yet.

    ======================================== */

    const prices = {


        /* ROUND CAKES */

        round: {

            "4": null,

            "6": null,

            "8": null,

            "10": null

        },


        /* SHAPED CAKES */

        heart: {

            "10": null

        },


        star: {

            "10": null

        },


        /* SHEET CAKES */

        sheet: {

            "9x13": null,

            "11x15": null

        },


        /* OTHER PRODUCTS */

        cupcakes: null,

        bundt: null,

        bento: null,

        tasting: null,

        specialty: null,


        /* FLAVOR UPCHARGES */

        flavors: {

            vanilla: 0,

            yellow: 0,

            confetti: 0,

            chocolate: 0,

            strawberry: 0,

            lemon: 0,

            marble: 0,

            "cookies-cream": 0,


            carrot: null,

            "butter-pecan": null,

            "german-chocolate": null,

            "oreo-cheesecake": null,

            "strawberry-shortcake": null,

            rum: null,

            "white-chocolate": null,

            "red-velvet": null

        },


        /* DESIGN ADD-ONS */

        addons: {

            "vintage-piping": null,

            airbrush: null,

            "edible-image": null,

            "cake-topper": null,

            glitter: null,

            sprinkles: null,

            candles: null,

            "fruit-filling": null,

            "specialty-mold": null,

            "themed-decoration": null

        },


        /* RUSH FEE */

        rushFee: 50

    };



    /* ========================================
       ESTIMATE DISPLAY ELEMENTS
    ======================================== */

    const estimateProduct =
        document.getElementById(
            "estimateProduct"
        );


    const estimateSize =
        document.getElementById(
            "estimateSize"
        );


    const estimateFlavor =
        document.getElementById(
            "estimateFlavor"
        );


    const estimateIcing =
        document.getElementById(
            "estimateIcing"
        );


    const estimateAddons =
        document.getElementById(
            "estimateAddons"
        );


    const estimatedTotal =
        document.getElementById(
            "estimatedTotal"
        );



    /* ========================================
       GET SELECTED OPTION TEXT
    ======================================== */

    function getSelectedText(select) {

        if (
            !select ||
            select.selectedIndex < 0 ||
            !select.value
        ) {

            return "—";

        }


        return select.options[
            select.selectedIndex
        ].text;

    }



    /* ========================================
       GET CAKE SIZE
    ======================================== */

    function getSelectedSize() {

        switch (cakeType.value) {


            case "round":

                return getSelectedText(
                    document.getElementById(
                        "roundSize"
                    )
                );


            case "heart":

                return "10-inch";


            case "star":

                return "10-inch";


            case "sheet":

                return getSelectedText(
                    document.getElementById(
                        "sheetSize"
                    )
                );


            case "cupcakes":

                const quantity =
                    document.getElementById(
                        "cupcakeQuantity"
                    ).value;

                return quantity
                    ? `${quantity} cupcakes`
                    : "—";


            case "bundt":

                return "Bundt / Pound Cake";


            case "bento":

                return "Bento Box";


            case "tasting":

                return "Tasting Bundle";


            case "specialty":

                return "Custom";


            default:

                return "—";

        }

    }



    /* ========================================
       GET SELECTED ADD-ONS
    ======================================== */

    function getSelectedAddons() {

        const selectedAddons =
            document.querySelectorAll(
                'input[name="addons"]:checked'
            );


        if (
            selectedAddons.length === 0
        ) {

            return "None";

        }


        return `${selectedAddons.length} selected`;

    }



    /* ========================================
       UPDATE ORDER SUMMARY
    ======================================== */

    function updateEstimate() {

        estimateProduct.textContent =
            getSelectedText(cakeType);


        estimateSize.textContent =
            getSelectedSize();


        estimateFlavor.textContent =
            getSelectedText(cakeFlavor);


        const icingBaseText =
            getSelectedText(icingBase);


        const icingFlavorText =
            getSelectedText(icingFlavor);


        if (
            icingBase.value &&
            icingFlavor.value
        ) {

            estimateIcing.textContent =
                `${icingFlavorText} ${icingBaseText}`;

        }

        else {

            estimateIcing.textContent = "—";

        }


        estimateAddons.textContent =
            getSelectedAddons();


        /*
           PRICE CALCULATION WILL BE
           ACTIVATED ONCE BASE PRICES
           ARE FILLED IN.
        */

        estimatedTotal.textContent =
            "Pricing Pending";

    }



    /* ========================================
       WATCH FORM FOR ESTIMATE CHANGES
    ======================================== */

    const estimateFields = [

        cakeFlavor,

        icingFlavor,

        document.getElementById("roundSize"),

        document.getElementById("sheetSize"),

        document.getElementById("cupcakeQuantity")

    ];


    estimateFields.forEach((field) => {

        if (!field) {
            return;
        }


        field.addEventListener(
            "change",
            updateEstimate
        );


        field.addEventListener(
            "input",
            updateEstimate
        );

    });



    const addonInputs =
        document.querySelectorAll(
            'input[name="addons"]'
        );


    addonInputs.forEach((addon) => {

        addon.addEventListener(
            "change",
            updateEstimate
        );

    });



    /* ========================================
       INITIAL ESTIMATE
    ======================================== */

    updateEstimate();



/* ========================================
       Cake ORDER FORM/Formspree
    ======================================== */

const orderFormStatus = document.getElementById("orderFormStatus");

if (orderForm && orderFormStatus) {

    /* Show confirmation after successful refresh */

    if (sessionStorage.getItem("orderSubmitted") === "true") {

        orderFormStatus.textContent =
            "Your cake request has been submitted! I'll review your request and follow up with availability and pricing.";

        sessionStorage.removeItem("orderSubmitted");

        orderFormStatus.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }


    /* Submit order to Formspree */

    orderForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        let savedCakesInput =
    document.getElementById("savedCakesData");

if (!savedCakesInput) {

    savedCakesInput =
        document.createElement("input");

    savedCakesInput.type = "hidden";
    savedCakesInput.id = "savedCakesData";
    savedCakesInput.name = "Additional Cakes";

    orderForm.appendChild(savedCakesInput);
}

savedCakesInput.value =
    JSON.stringify(savedCakes);

        const formData = new FormData(orderForm);

        try {

            const response = await fetch(orderForm.action, {
                method: orderForm.method,
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {

                sessionStorage.setItem(
                    "orderSubmitted",
                    "true"
                );

                window.location.reload();

            } else {

                orderFormStatus.textContent =
                    "Something went wrong while submitting your request. Please try again.";
            }

        } catch (error) {

            orderFormStatus.textContent =
                "Something went wrong while submitting your request. Please try again.";
        }
    });
}

});

/* ========================================
       Contact Form/Formspree
    ======================================== */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                formStatus.textContent =
                    "Thanks! Your message has been sent successfully.";

                contactForm.reset();
            } else {
                formStatus.textContent =
                    "Something went wrong. Please try again.";
            }
        } catch (error) {
            formStatus.textContent =
                "Something went wrong. Please try again.";
        }
    });
}

