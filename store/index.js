export const state = () => ({
  entries: [],
  filter: [],
  blogList: [],
});
export const mutations = {
  setEntries(state, data) {
    state.entry = data;
  },
  setFilter(state, data) {
    state.filter = data;
  },
  setBlogList(state, data) {
    state.blogList = data;
  },
};
