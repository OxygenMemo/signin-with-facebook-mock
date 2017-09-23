test('Mock with 1 should return 1',()=>{
    const mock=jest.fn()
        .mockReturnValue(1)
        expect(mock()).toBe(1)
})