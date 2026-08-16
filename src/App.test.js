import { act, render, screen } from '@testing-library/react';
import CarouselComponent from './CarouselComponent';

describe('CarouselComponent', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('updates the roadmap according to the carousel timing', () => {
    render(<CarouselComponent />);

    const roadmap = screen.getByAltText('Roadmap');
    expect(roadmap).toHaveAttribute('src', '/images/PythonForAI_image.png');

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByAltText('Roadmap')).toHaveAttribute(
      'src',
      '/images/webdevelopment_roadmap.png'
    );
  });
});
