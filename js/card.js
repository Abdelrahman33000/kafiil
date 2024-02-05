      const cardsData = [
        {
          id: 1,
          image: "/images/card.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
          icon: "/images/star.png",
          icon1: "/images/chart.png",
          icon2: "/images/icon1.png",
          icon3: "/images/icon2.png",
          iconName: " 4.9",
          iconName1: " 300",
          iconName2: " Jane Smith",
          iconName3: " $10",
        },
        {
          id: 2,
          image: "/images/card.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
          icon: "/images/star.png",
          icon1: "/images/chart.png",
          icon2: "/images/icon1.png",
          icon3: "/images/icon2.png",
          iconName: " 4.9",
          iconName1: " 300",
          iconName2: " Jane Smith",
          iconName3: " $10",
        },
        {
          id: 3,
          image: "/images/card.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
          icon: "/images/star.png",
          icon1: "/images/chart.png",
          icon2: "/images/icon1.png",
          icon3: "/images/icon2.png",
          iconName: "4.9",
          iconName1: " 300",
          iconName2: " Jane Smith",
          iconName3: " $10",
        },
        {
          id: 4,
          image: "/images/card.png",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
          icon: "/images/star.png",
          icon1: "/images/chart.png",
          icon2: "/images/icon1.png",
          icon3: "/images/icon2.png",
          iconName: "4.9",
          iconName1: " 300",
          iconName2: " Jane Smith",
          iconName3: " $10",
        },
      ];

      $(document).ready(function () {
        const cardsContainer = $("#cards-container");

        cardsData.forEach((card) => {
          const cardElement = $('<div class="card">');
          cardElement.append(`<img src="${card.image}" alt="Card ${card.id}">`);

          const heartContainer = $('<div class="heart-container">');
          heartContainer.append('<div class="heart"></div>');
          cardElement.append(heartContainer);

          const content = $('<div class="content">');
          content.append(`<p>${card.text}</p>`);

          const icons = $('<div class="icons">  ');
          icons.append(
            `<div  class="flex"><img src="${card.icon}" alt="${card.iconName}"> <span>${card.iconName}<span>  </div>`
          );
          icons.append(
            `<div class="flex"><img src="${card.icon1}" alt="${card.iconName1}"> <span>${card.iconName1}</span></div>`
          );

          const icons1 = $('<div class="icons1">  ');

          icons1.append(
            `<div class="flex1"><img class="img" src="${card.icon2}" alt="${card.iconName2}"> <span >${card.iconName2}</span></div>`
          );
          icons1.append(
            `<div class="flex1"><img  src="${card.icon3}" alt="${card.iconName3}"> <span>${card.iconName3}</span></div>`
          );

          content.append(icons);
          content.append(icons1);
          cardElement.append(content);

          cardElement.hover(
            function () {
              $(this).css("scale", "1.1" );

            },
            function () {
              $(this).css("scale", "1");
            }
          );

          // cardElement.append('<div class="star">&#9733;</div>');

          cardsContainer.append(cardElement);
        });

        $(".heart-container").on("click", function () {
          $(this).find(".heart").toggleClass("clicked");
        });
      });
