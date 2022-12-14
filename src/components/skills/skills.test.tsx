import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('first', () => {
  const skills = ['HTML', 'CSS'];

  test('rendered correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders login button', () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginButton).toBeInTheDocument();
  });

  test('not renders start learning button', () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test('Start Learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);
    // logRoles(view.container);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
