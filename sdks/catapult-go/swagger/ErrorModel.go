package swagger

import (
)

type ErrorModel struct {
    Category  string  `json:"category,omitempty"`
    Code  string  `json:"code,omitempty"`
    Message  string  `json:"message,omitempty"`
    Details  []ErrorModelDetails  `json:"details,omitempty"`
    
}
