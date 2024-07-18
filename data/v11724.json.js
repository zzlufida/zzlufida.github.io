window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11724","name":"NE_OperationType_Ref_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view NE_OperationType_Ref_View\r\nas\r\nselect NE_OperationType.Code,NE_OperationType.Name,NE_OperationType.TypeID,NE_OperationType.ShowModelCode,\r\n\r\nNE_OperationType.PrintModelCode,NE_OperationType.IsNeedApply,NE_OperationType.IsAllowLoan,NE_OperationType.IsBudgetControl,\r\n\r\nNE_OperationType.IsCreditControl,NE_OperationType.IsNeedBudgetItem,NE_OperationType.IsReturnLoan,NE_OperationType.IsModifyStandard,\r\n\r\nNE_OperationType.SystemLink,NE_OperationType.MenuID,NE_OperationType.PrefixCode,NE_OperationType.IsPublished,\r\n\r\nNE_OperationType.ts,NE_OperationType.SystemID,NE_OperationType.PrintModelName as vt_name\r\n\r\nfrom NE_OperationType where IsPublished=1\r\n\r\nunion \r\n\r\nselect NE_OperationType.Code,NE_OperationType.Name,NE_OperationType.TypeID,NE_OperationType.ShowModelCode,\r\n\r\nNE_OperationType.PrintModelCode,NE_OperationType.IsNeedApply,NE_OperationType.IsAllowLoan,NE_OperationType.IsBudgetControl,\r\n\r\nNE_OperationType.IsCreditControl,NE_OperationType.IsNeedBudgetItem,NE_OperationType.IsReturnLoan,NE_OperationType.IsModifyStandard,\r\n\r\nNE_OperationType.SystemLink,NE_OperationType.MenuID,NE_OperationType.PrefixCode,NE_OperationType.IsPublished,\r\n\r\nNE_OperationType.ts,NE_OperationType.SystemID,NE_OperationType.PrintModelName as vt_name\r\n\r\nfrom NE_OperationType \r\n\r\ninner join\r\n\r\n(\r\n\r\n\tselect distinct OperationTypeCode from NE_LoanVouch\r\n\r\n\tunion\r\n\r\n\tselect distinct OperationTypeCode from NE_ExpenVouch\r\n\r\n\tunion\r\n\r\n\tselect distinct OperationTypeCode from NE_ReturnVouch\r\n\r\n\tunion\r\n\r\n\tselect distinct OperationTypeCode from NE_CostApply\r\n\r\n) as vouch\r\n\r\n\ton NE_OperationType.IsPublished=0 and NE_OperationType.Code=vouch.OperationTypeCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_OperationType_Ref_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-250403","object_id":"column-250403","name":"Code","name_without_path":"Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250404","object_id":"column-250404","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250405","object_id":"column-250405","name":"TypeID","name_without_path":"TypeID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250406","object_id":"column-250406","name":"ShowModelCode","name_without_path":"ShowModelCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250407","object_id":"column-250407","name":"PrintModelCode","name_without_path":"PrintModelCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250408","object_id":"column-250408","name":"IsNeedApply","name_without_path":"IsNeedApply","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250409","object_id":"column-250409","name":"IsAllowLoan","name_without_path":"IsAllowLoan","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250410","object_id":"column-250410","name":"IsBudgetControl","name_without_path":"IsBudgetControl","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250411","object_id":"column-250411","name":"IsCreditControl","name_without_path":"IsCreditControl","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250412","object_id":"column-250412","name":"IsNeedBudgetItem","name_without_path":"IsNeedBudgetItem","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250413","object_id":"column-250413","name":"IsReturnLoan","name_without_path":"IsReturnLoan","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250414","object_id":"column-250414","name":"IsModifyStandard","name_without_path":"IsModifyStandard","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250415","object_id":"column-250415","name":"SystemLink","name_without_path":"SystemLink","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250416","object_id":"column-250416","name":"MenuID","name_without_path":"MenuID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250417","object_id":"column-250417","name":"PrefixCode","name_without_path":"PrefixCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250418","object_id":"column-250418","name":"IsPublished","name_without_path":"IsPublished","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250419","object_id":"column-250419","name":"ts","name_without_path":"ts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250420","object_id":"column-250420","name":"SystemID","name_without_path":"SystemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250421","object_id":"column-250421","name":"vt_name","name_without_path":"vt_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};