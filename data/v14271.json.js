window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14271","name":"vwFM_FinFXSub","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_FinFXSub\r\nAS\r\nSELECT TOP 100 PERCENT dbo.VoucherTemplates.VT_Name AS N'单据模版名称', \r\n      dbo.FM_Finance.strFinID AS N'业务编号', dbo.FM_Finance.dtDate AS N'日期', \r\n      dbo.FM_Finance.strUnitCode AS N'筹资单位编号', \r\n      dbo.vFM_Unit.strUnitName AS N'筹资单位名称', dbo.FM_Finance.strExchName AS N'币种', \r\n      dbo.FM_Finance.dblFinMon AS N'筹资总额', \r\n      CASE WHEN ISNULL(dbo.FM_Finance.strChecker, N'') \r\n      = N'' THEN N'否' ELSE N'是' END AS N'是否审核'\r\nFROM dbo.FM_Finance LEFT OUTER JOIN\r\n      dbo.vFM_Unit ON \r\n      dbo.FM_Finance.strUnitCode = dbo.vFM_Unit.strUnitID LEFT OUTER JOIN\r\n      dbo.VoucherTemplates ON dbo.FM_Finance.VT_ID = dbo.VoucherTemplates.VT_ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_FinFXSub"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423132","object_id":"column-423132","name":"单据模版名称","name_without_path":"单据模版名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423133","object_id":"column-423133","name":"业务编号","name_without_path":"业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423134","object_id":"column-423134","name":"日期","name_without_path":"日期","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423135","object_id":"column-423135","name":"筹资单位编号","name_without_path":"筹资单位编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423136","object_id":"column-423136","name":"筹资单位名称","name_without_path":"筹资单位名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423137","object_id":"column-423137","name":"币种","name_without_path":"币种","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423138","object_id":"column-423138","name":"筹资总额","name_without_path":"筹资总额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423139","object_id":"column-423139","name":"是否审核","name_without_path":"是否审核","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};