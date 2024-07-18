window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14259","name":"vwFM_DepoYE","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_DepoYE\r\nAS\r\nSELECT dbo.FM_Deposit.dtDate AS N'日期', dbo.VoucherTemplates.VT_Name AS N'单据模版名称', dbo.VoucherTemplates.VT_Name AS N'查询单据名称',\r\n      dbo.FM_Deposit.strDepositID AS N'业务编号',dbo.FM_Deposit.strDepositID AS N'对应业务编号', dbo.FM_Deposit.dblDeposit AS N'存款金额', \r\n      0 AS N'取本金额', 0  AS N'利息额',\r\n      0 AS N'余额'\r\nFROM dbo.FM_Deposit LEFT OUTER JOIN\r\n      dbo.VoucherTemplates ON dbo.FM_Deposit.VT_ID = dbo.VoucherTemplates.VT_ID\r\n\r\nUnion\r\n\r\nSELECT dbo.FM_Fetch.dtDate AS N'日期', a.VT_Name AS N'单据模版名称', b.VT_Name AS N'查询单据名称',\r\n      dbo.FM_Fetch.strFetchID AS N'业务编号',dbo.FM_Fetch.strDepositID AS N'对应业务编号', 0 AS N'存款金额', \r\n      dbo.FM_Fetch.DblQbje AS N'取本金额', dbo.FM_Fetch.DblQlxe  AS N'利息额',\r\n      0 AS N'余额'\r\nFROM dbo.FM_Fetch LEFT OUTER JOIN dbo.VoucherTemplates a ON dbo.FM_Fetch.VT_ID = a.VT_ID join dbo.FM_Deposit on\r\n dbo.FM_Fetch.strDepositID = dbo.FM_Deposit.strDepositID LEFT OUTER JOIN\r\n      dbo.VoucherTemplates b ON dbo.FM_Deposit.VT_ID = b.VT_ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_DepoYE"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423056","object_id":"column-423056","name":"日期","name_without_path":"日期","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423057","object_id":"column-423057","name":"单据模版名称","name_without_path":"单据模版名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423058","object_id":"column-423058","name":"查询单据名称","name_without_path":"查询单据名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423059","object_id":"column-423059","name":"业务编号","name_without_path":"业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423060","object_id":"column-423060","name":"对应业务编号","name_without_path":"对应业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423061","object_id":"column-423061","name":"存款金额","name_without_path":"存款金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423062","object_id":"column-423062","name":"取本金额","name_without_path":"取本金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423063","object_id":"column-423063","name":"利息额","name_without_path":"利息额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423064","object_id":"column-423064","name":"余额","name_without_path":"余额","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};