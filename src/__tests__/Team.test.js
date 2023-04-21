import Team from '../js/Team';

test('testing adding to Team', () => {
  const team = new Team();
  team.add('bowman');
  expect(Array.from(team.members)).toEqual(['bowman']);
});

test('testing second adding to Team', () => {
  const team = new Team();
  expect(() => {
    team.add('bowman');
    team.add('undead');
    team.add('bowman');
  }).toThrow('Объект уже существует в команде');
});

test('testing addingALL to Team', () => {
  const team = new Team();
  team.addAll('bowman', 'swordsman', 'undead', 'deamom');
  expect(Array.from(team.members)).toEqual(['bowman', 'swordsman', 'undead', 'deamom']);
});

test('testing addingALL to Team with dubbling', () => {
  const team = new Team();
  team.addAll('bowman', 'swordsman', 'bowman', 'deamon', 'deamon');
  expect(Array.from(team.members)).toEqual(['bowman', 'swordsman', 'deamon']);
});

test('testing toArrya to Team', () => {
  const team = new Team();
  team.addAll('bowman', 'swordsman', 'undead', 'deamom', 'bowman');
  expect(team.toArray()).toEqual(['bowman', 'swordsman', 'undead', 'deamom']);
});
