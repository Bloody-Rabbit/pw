a2b([], []).
a2b([a|AL], [b|BL]) :- a2b(AL, BL).


a2b([a,a,a,a], [b,b,b,b]).


