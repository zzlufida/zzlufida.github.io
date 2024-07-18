window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11753","name":"NE_VouchBudgetValue_Sub_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view NE_VouchBudgetValue_Sub_View \r\nas \r\nSELECT S.BudgetItemID, S.Port1, S.Port1Value, S.Port2, S.Port2Value, S.Port3,   \r\n      S.Port3Value,S.Port4, S.Port4Value,S.Port5, S.Port5Value,S.Port6,S.Port6Value,\r\n   case when foreigncurrency.bcal=0 then Cast(S.FactMoney*M.ExchangeRate as money) \r\n\telse Cast(S.FactMoney/M.ExchangeRate as money) end as LocalMoney  \r\nFROM NE_LoanVouch M \r\ninner join NE_LoanVouch_Sub S \r\n\ton M.ID=S.LoanVouchID \r\nleft Join foreigncurrency \r\n\tOn M.Currency=foreigncurrency.cexch_Name  \r\nWHERE (M.BudgetState = 1)  \r\nUNION ALL  \r\nSELECT case when isnull(S.BudgetItemID,'')='' then M.BudgetItemID else S.BudgetItemID end as BudgetItemID,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port1 else S.Port1 end as Port1,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port1Value else S.Port1Value end as Port1Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port2 else S.Port2 end as Port2,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port2Value else S.Port2Value end as Port2Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port3 else S.Port3 end as Port3,  \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port3Value else S.Port3Value end as Port3Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port4 else S.Port4 end as Port4,  \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port4Value else S.Port4Value end as Port4Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port5 else S.Port5 end as Port5,  \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port5Value else S.Port5Value end as Port5Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port6 else S.Port6 end as Port6,  \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port6Value else S.Port6Value end as Port6Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.LocalMoney else S.LocalMoney end as LocalMoney  \r\nFROM NE_ExpenVouch M \r\nLeft join NE_ExpenseVouch_Sub S \r\n\ton M.ID=S.ExpenseVouchID\r\nUNION ALL\r\nSELECT vouch.BudgetItemID, vouch.Port1, vouch.Port1Value, vouch.Port2, vouch.Port2Value, vouch.Port3,   \r\n      vouch.Port3Value,vouch.Port4, vouch.Port4Value,vouch.Port5,vouch.Port5Value,vouch.Port6,vouch.Port6Value,\r\n   vouch.LocalMoney\r\nFROM NE_ReturnVouch as vouch\r\nleft Join foreigncurrency \r\n\tOn vouch.Currency=foreigncurrency.cexch_Name\r\nUNION ALL\r\nSELECT case when isnull(S.BudgetItemID,'')='' then M.BudgetItemID else S.BudgetItemID end as BudgetItemID,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port1 else S.Port1 end as Port1,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port1Value else S.Port1Value end as Port1Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port2 else S.Port2 end as Port2,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port2Value else S.Port2Value end as Port2Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port3 else S.Port3 end as Port3,  \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port3Value else S.Port3Value end as Port3Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port4 else S.Port4 end as Port4,  \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port4Value else S.Port4Value end as Port4Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port5 else S.Port5 end as Port5,  \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port5Value else S.Port5Value end as Port5Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port6 else S.Port6 end as Port6,  \r\ncase when isnull(S.BudgetItemID,'')='' then M.Port6Value else S.Port6Value end as Port6Value,   \r\ncase when isnull(S.BudgetItemID,'')='' then M.LocalMoney else S.LocalMoney end as LocalMoney  \r\nFROM NE_CostApply M \r\nLeft join NE_CostApply_Sub S \r\n\ton M.ID=S.CostApplyID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_VouchBudgetValue_Sub_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-251150","object_id":"column-251150","name":"BudgetItemID","name_without_path":"BudgetItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251151","object_id":"column-251151","name":"Port1","name_without_path":"Port1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251152","object_id":"column-251152","name":"Port1Value","name_without_path":"Port1Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251153","object_id":"column-251153","name":"Port2","name_without_path":"Port2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251154","object_id":"column-251154","name":"Port2Value","name_without_path":"Port2Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251155","object_id":"column-251155","name":"Port3","name_without_path":"Port3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251156","object_id":"column-251156","name":"Port3Value","name_without_path":"Port3Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251157","object_id":"column-251157","name":"Port4","name_without_path":"Port4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251158","object_id":"column-251158","name":"Port4Value","name_without_path":"Port4Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251159","object_id":"column-251159","name":"Port5","name_without_path":"Port5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251160","object_id":"column-251160","name":"Port5Value","name_without_path":"Port5Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251161","object_id":"column-251161","name":"Port6","name_without_path":"Port6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251162","object_id":"column-251162","name":"Port6Value","name_without_path":"Port6Value","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-251163","object_id":"column-251163","name":"LocalMoney","name_without_path":"LocalMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"19, 4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};