# RECIPROCAL DISTRIBUTION

## Phitter implementation

**Distribution Definition**

```python
import phitter

distribution = phitter.continuous.Reciprocal({"a": *, "b": *})
```

> 💡 The distribution's parameters are defined equation section below

**Distribution Methods and Attributes**

```python
## CDF, PDF, PPF receive float or numpy.ndarray.
distribution.cdf(float | numpy.ndarray) # -> float | numpy.ndarray
distribution.pdf(float | numpy.ndarray) # -> float | numpy.ndarray
distribution.ppf(float | numpy.ndarray) # -> float | numpy.ndarray
distribution.sample(int) # -> numpy.ndarray

## STATS
distribution.mean # -> float
distribution.variance # -> float
distribution.standard_deviation # -> float
distribution.skewness # -> float
distribution.kurtosis # -> float
distribution.median # -> float
distribution.mode # -> float
```

## Equations

**Distribution Definition**
$$ X\sim\mathrm{Reciprocal}\left(a,b\right) $$

**Distribution Domain**
$$ x\in\left[a,b\right] $$

**Parameters Domain and Constraints**
$$ a\in\mathbb{R}^{+}, b\in\mathbb{R}^{+}, a < b $$

**Cumulative Distribution Function**
$$ F_{X}\left(x\right)=\frac{\ln(x)-\ln(a)}{\ln(b)-\ln(a)} $$

**Probability Density Function**
$$ f_{X}\left(x\right)=\frac{1}{x\left(\ln(b)-\ln(a)\right)} $$

**Percent Point Function / Sample**
$$ F^{-1}_{X}\left(u\right)=\exp(\ln(a)+u\times \left(\ln(b)-\ln(a)\right)) $$

**Parametric Centered Moments**
$$ \mu'_{k}=E[X^k]=\int_{a }^{b}x^{k}f_{X}\left(x\right)dx=\frac{b^k-a^k}{k\left(\ln(b)-\ln(a)\right)} $$

**Parametric Mean**
$$ \mathrm{Mean}(X)=\mu'_{1} $$

**Parametric Variance**
$$ \mathrm{Variance}(X)=\mu'_{2}-\mu'^{2}_{1} $$

**Parametric Skewness**
$$ \mathrm{Skewness}(X)=\frac{\mu'_{3}-3\mu'_{2}\mu'_{1}+2\mu'^{3}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{1.5}} $$

**Parametric Kurtosis**
$$ \mathrm{Kurtosis}(X)=\frac{\mu'_{4}-4\mu'_{1}\mu'_{3}+6\mu'^{2}_{1}\mu'_{2}-3\mu'^{4}_{1}}{(\mu'_{2}-\mu'^{2}_{1})^{2}} $$

**Parametric Median**
$$ \mathrm{Median}(X)=\exp\left[\ln(a)+\frac{\left(\ln(b)-\ln(a)\right)}{2}\right] $$

**Parametric Mode**
$$ \mathrm{Mode}(X)=a $$

**Additional Information and Definitions**
- $u:\text{Uniform[0,1] random varible}$

**Spreadsheet Documents**

-   [Phitter playground](https://phitter.io/distributions/continuous/reciprocal)
-   <a @click="downloadExcelFile">Download Excel Spreadsheet</a>
-   [Excel file from GitHub repository](https://github.com/phitter-core/phitter-files/blob/main/continuous/reciprocal.xlsx)
-   [Google spreadsheet document](https://docs.google.com/spreadsheets/d/1ghFeCj8Q_hbpWqv9xXaNl1UKUe-5kOomZPWyI1JsoGA)

<script setup>
const downloadExcelFile = function() {
    const fileId = "reciprocal";
    const url = `https://raw.githubusercontent.com/phitter-core/phitter-files/main/continuous/${fileId}.xlsx`;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${fileId}.xlsx`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>

<style module>
a {
  cursor: pointer;
}
</style>

    