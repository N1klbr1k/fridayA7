|---array--------|-----time-insert-|----time_append-|
|-extralargeArray|------1.0681879s-|----3.8629ms----|
|--largeArray----|-----10.501ms----|---735.7μs------|
|--mediumArray---|-----191.6μs-----|---155.5μs------|
|--smallArray----|-----53.7μs------|---113.1μs------|
|--tinyArray-----|-----37.5μs------|---97.9μs-------|


Observations:
    DoublerAppend: Looking over the chart my first observation was that it was interesting that this function was actually slower than the
    other function at smaller inputs. This observation makes sense since this function scales linearly, on the low end the behaviour is 
    consistent with what we would expect from that scaling.
    InsertAppend: Conversely, this function, while faster than time_append initially slows down much faster. We can see that this function 
    scales quadratically. given that this functions scales quadratically, we can see that it scales much worse than the append functin, even though at low input sizes
    it does start off faster. 
    After revewing both of the functions we can conclude that doublerAppend scales better than inserstAppend due to its linear rather than quadratic timing.
    