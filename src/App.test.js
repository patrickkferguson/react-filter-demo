import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/react';
import App from './App';


let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('App renders', () =>  {  
  act(() => {
    render(<App />, container);
  });

  const popularCardList = container.querySelector(".Results .Carousel .CardList");
  expect(popularCardList).not.toBeNull();
  expect(popularCardList.children.length).toBe(0);

  const featuredCardList = container.querySelector(".Results > .CardList");
  expect(featuredCardList).not.toBeNull();
  expect(featuredCardList.children.length).toBe(0);
});

test('App renders API data into results', async () => {
  const apiData = {
    data: [
      {
        title: "Uluru-Kata Tjuta National Park",
        img: "https://picsum.photos/800/2700",
        location: "Uluru NT"
      },
      {
        title: "Royal National Park",
        img: "https://picsum.photos/400/400",
        location: "Royal National Park NSW"
      },
      {
        title: "Kosciuszko National Park",
        img: "https://picsum.photos/320/720",
        location: "NSW"
      }
    ]
  };
  jest.spyOn(global, "fetch").mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve(apiData)
    })
  );

  await act(async () => {
    render(<App />, container);
  })

  const popularCardList = container.querySelector(".Results .Carousel .CardList");
  expect(popularCardList).not.toBeNull();
  expect(popularCardList.children.length).toBe(apiData.data.length);

  const featuredCardList = container.querySelector(".Results > .CardList");
  expect(featuredCardList).not.toBeNull();
  expect(featuredCardList.children.length).toBe(apiData.data.length);

  global.fetch.mockRestore();
});

test('App filters popular results by input', async () => {
  const apiData = {
    data: [
      {
        title: "Uluru-Kata Tjuta National Park",
        img: "https://picsum.photos/800/2700",
        location: "Uluru NT"
      },
      {
        title: "Royal National Park",
        img: "https://picsum.photos/400/400",
        location: "Royal National Park NSW"
      },
      {
        title: "Kosciuszko National Park",
        img: "https://picsum.photos/320/720",
        location: "NSW"
      }
    ]
  };
  jest.spyOn(global, "fetch").mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve(apiData)
    })
  );

  await act(async () => {
    render(<App />, container);
  });

  const popularCardList = container.querySelector(".Results .Carousel .CardList");
  expect(popularCardList).not.toBeNull();
  expect(popularCardList.children.length).toBe(apiData.data.length);

  const featuredCardList = container.querySelector(".Results > .CardList");
  expect(featuredCardList).not.toBeNull();
  expect(featuredCardList.children.length).toBe(apiData.data.length);

  const searchInput = container.querySelector("input");
  fireEvent.change(searchInput, { target: { value: "nation" } });

  expect(popularCardList).not.toBeNull();
  expect(popularCardList.children.length).toBe(2);

  expect(featuredCardList).not.toBeNull();
  expect(featuredCardList.children.length).toBe(apiData.data.length);

  global.fetch.mockRestore();
});
