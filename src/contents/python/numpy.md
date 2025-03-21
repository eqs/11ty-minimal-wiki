---
title: グラフのプロット
order: 20
---

```python
import numpy as np
from matplotlib import pyplot as plt


x = np.linspace(0.0, 2.0*np.pi, 1000)
y = np.sin(x) + np.sin(x*3.0) / 3.0

plt.plot(x, y)
