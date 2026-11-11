/* @ds-bundle: {"format":4,"namespace":"ParcoursHommesDesignSystem_b918b4","components":[{"name":"BiomarkerRow","sourcePath":"components/data/BiomarkerRow.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data/BiomarkerRow.jsx":"b70c9b931978","components/data/Card.jsx":"041b76e7fb4c","components/data/StatCard.jsx":"1ed782e3fbdc","components/feedback/Badge.jsx":"ea6700c8b9cb","components/feedback/ProgressBar.jsx":"7d487a613b45","components/feedback/Tag.jsx":"35b34ddcdf0c","components/feedback/Toast.jsx":"130322a67b68","components/forms/Button.jsx":"9c5104fe59b3","components/forms/Checkbox.jsx":"4577de830a45","components/forms/IconButton.jsx":"a295bb4007ee","components/forms/Input.jsx":"c2e3865af782","components/forms/Radio.jsx":"f45d579c710d","components/forms/Select.jsx":"0c5afe582f07","components/forms/Switch.jsx":"cdae69badc73","components/navigation/Tabs.jsx":"7a191160b016"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ParcoursHommesDesignSystem_b918b4 = window.ParcoursHommesDesignSystem_b918b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/BiomarkerRow.jsx
try { (() => {
const toneMap = {
  positive: {
    color: 'var(--status-positive)',
    label: 'Optimal'
  },
  watch: {
    color: 'var(--status-watch)',
    label: 'À surveiller'
  },
  alert: {
    color: 'var(--status-alert)',
    label: 'Hors norme'
  }
};
function BiomarkerRow({
  name,
  value,
  unit,
  range,
  tone = 'positive'
}) {
  const t = toneMap[tone] || toneMap.positive;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: t.color,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-tertiary)'
    }
  }, range), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      color: 'var(--text-primary)',
      minWidth: 70,
      textAlign: 'right'
    }
  }, value, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, unit)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      color: t.color,
      minWidth: 90,
      textAlign: 'right'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { BiomarkerRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BiomarkerRow.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  children,
  tone = 'ink',
  padding = 24,
  bordered = true
}) {
  const bg = tone === 'paper' ? 'var(--surface-paper)' : tone === 'raised' ? 'var(--surface-card)' : 'var(--surface-canvas-raised)';
  const color = tone === 'paper' ? 'var(--text-on-paper)' : 'var(--text-primary)';
  const border = bordered ? `1px solid ${tone === 'paper' ? 'var(--border-on-paper)' : 'var(--border-default)'}` : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color,
      border,
      borderRadius: 'var(--radius-md)',
      padding,
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  unit,
  delta,
  deltaTone = 'positive'
}) {
  const deltaColor = deltaTone === 'positive' ? 'var(--status-positive)' : deltaTone === 'alert' ? 'var(--status-alert)' : 'var(--text-tertiary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-canvas-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 32,
      color: 'var(--text-primary)'
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-tertiary)',
      marginLeft: 6
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: deltaColor
    }
  }, delta));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const styles = {
  positive: {
    bg: 'var(--status-positive-bg)',
    color: 'var(--status-positive)'
  },
  watch: {
    bg: 'var(--status-watch-bg)',
    color: 'var(--status-watch)'
  },
  alert: {
    bg: 'var(--status-alert-bg)',
    color: 'var(--status-alert)'
  },
  neutral: {
    bg: 'rgba(242,236,220,0.10)',
    color: 'var(--text-secondary)'
  },
  accent: {
    bg: 'rgba(221,92,48,0.16)',
    color: 'var(--ember-400)'
  }
};
function Badge({
  children,
  tone = 'neutral'
}) {
  const s = styles[tone] || styles.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      background: s.bg,
      color: s.color,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  label
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-mono)'
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 12,
      color: 'var(--text-secondary)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--ink-800)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: 'var(--accent-primary)',
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${active ? 'var(--accent-primary)' : 'var(--border-default)'}`,
      background: active ? 'var(--accent-primary)' : hover ? 'rgba(242,236,220,0.06)' : 'transparent',
      color: active ? 'var(--bone-50)' : 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  children,
  tone = 'neutral',
  onClose
}) {
  const border = tone === 'alert' ? 'var(--status-alert)' : tone === 'positive' ? 'var(--status-positive)' : 'var(--accent-primary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      background: 'var(--ink-800)',
      border: '1px solid var(--border-default)',
      borderLeft: `3px solid ${border}`,
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      boxShadow: 'var(--shadow-md)',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-tertiary)',
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const sizeStyles = {
  md: {
    padding: '12px 22px',
    fontSize: 14
  },
  lg: {
    padding: '16px 28px',
    fontSize: 16
  }
};
const variantStyles = {
  primary: {
    background: 'var(--accent-primary)',
    color: 'var(--bone-50)',
    border: '1px solid var(--accent-primary)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  onPaper: {
    background: 'var(--ink-950)',
    color: 'var(--bone-50)',
    border: '1px solid var(--ink-950)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button'
}) {
  const [hover, setHover] = React.useState(false);
  const base = variantStyles[variant] || variantStyles.primary;
  const sz = sizeStyles[size] || sizeStyles.md;
  let bg = base.background;
  if (hover && !disabled) {
    if (variant === 'primary') bg = 'var(--accent-primary-hover)';
    if (variant === 'secondary' || variant === 'ghost') bg = 'rgba(242,236,220,0.06)';
    if (variant === 'onPaper') bg = 'var(--ink-800)';
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...sz,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'background-color var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
      background: bg,
      color: base.color,
      border: base.border,
      transform: hover && !disabled ? 'translateY(-1px)' : 'none'
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      border: `2px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--accent-primary)' : 'transparent',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5l3.5 3.5L11 1",
    stroke: "var(--bone-50)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    checked: checked,
    onChange: () => onChange && onChange(!checked),
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  children,
  label,
  variant = 'ghost',
  onClick,
  size = 40
}) {
  const [hover, setHover] = React.useState(false);
  const bg = variant === 'solid' ? hover ? 'var(--accent-primary-hover)' : 'var(--accent-primary)' : hover ? 'rgba(242,236,220,0.08)' : 'transparent';
  const color = variant === 'solid' ? 'var(--bone-50)' : 'var(--text-primary)';
  const border = variant === 'solid' ? '1px solid var(--accent-primary)' : '1px solid var(--border-default)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color,
      border,
      cursor: 'pointer',
      transition: 'background-color var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  helpText,
  name
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    name: name,
    type: type,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '13px 14px',
      background: 'var(--ink-900)',
      color: 'var(--text-primary)',
      border: `1px solid ${error ? 'var(--status-alert)' : focused ? 'var(--accent-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }), (error || helpText) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--status-alert)' : 'var(--text-tertiary)'
    }
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(value),
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--accent-primary)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: () => onChange && onChange(value),
    style: {
      display: 'none'
    }
  }), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  value,
  onChange,
  options = [],
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    onChange: onChange,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '13px 14px',
      background: 'var(--ink-900)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      appearance: 'none',
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8'><path d='M1 1l5 5 5-5' stroke='%238c8c90' stroke-width='1.5' fill='none'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 14px center'
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent-primary)' : 'var(--ink-700)',
      border: '1px solid var(--border-default)',
      position: 'relative',
      transition: 'background-color var(--duration-base) var(--ease-standard)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'var(--bone-50)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-body)'
    }
  }, items.map(item => {
    const isActive = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      onClick: () => onChange && onChange(item.value),
      style: {
        padding: '12px 18px',
        background: 'none',
        border: 'none',
        borderBottom: `2px solid ${isActive ? 'var(--accent-primary)' : 'transparent'}`,
        color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
        fontWeight: isActive ? 700 : 500,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.03em',
        cursor: 'pointer',
        transition: 'color var(--duration-fast) var(--ease-standard)'
      }
    }, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BiomarkerRow = __ds_scope.BiomarkerRow;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
