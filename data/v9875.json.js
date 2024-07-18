window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9875","name":"Ap_Order","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW Ap_Order  \r\nAS   \r\nSELECT   \r\n cFlag,cOrderID,iOrderType,  \r\n sum(case when cFlag='AR' then (case when cVouchType='48' then iAmt else -iAmt end) else (case when cVouchType='49' then iAmt else -iAmt end) end) as iAmount,  \r\n sum(case when cFlag='AR' then (case when cVouchType='48' then iAmt_f else -iAmt_f end) else (case when cVouchType='49' then iAmt_f else -iAmt_f end) end) as iAmount_f,  \r\n sum(case when cFlag='AR' then (case when cVouchType='48' then iRAmt else -iRAmt end) else (case when cVouchType='49' then iRAmt else -iRAmt end) end) as iRAmount,  \r\n sum(case when cFlag='AR' then (case when cVouchType='48' then iRAmt_f else -iRAmt_f end) else (case when cVouchType='49' then iRAmt_f else -iRAmt_f end) end) as iRAmount_f  \r\nFROM   \r\n Ap_CloseBills   \r\nINNER JOIN   \r\n Ap_CloseBill  \r\nON  \r\n Ap_CloseBills.iID=Ap_CloseBill.iID  \r\nWHERE   \r\n iType<>6 and cOrderID is not null\r\nGROUP BY  \r\n cFlag,cOrderID,iOrderType","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Ap_Order"},{"field":"Type","value":"View"}],"columns":[{"id":"column-161501","object_id":"column-161501","name":"cFlag","name_without_path":"cFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161502","object_id":"column-161502","name":"cOrderID","name_without_path":"cOrderID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161503","object_id":"column-161503","name":"iOrderType","name_without_path":"iOrderType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161504","object_id":"column-161504","name":"iAmount","name_without_path":"iAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161505","object_id":"column-161505","name":"iAmount_f","name_without_path":"iAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161506","object_id":"column-161506","name":"iRAmount","name_without_path":"iRAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161507","object_id":"column-161507","name":"iRAmount_f","name_without_path":"iRAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};