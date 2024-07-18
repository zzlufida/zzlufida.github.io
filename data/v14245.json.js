window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14245","name":"vwFM_AssFX","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_AssFX\r\nAS\r\nSELECT dbo.VoucherTemplates.VT_Name AS N'单据模版名称', \r\n      dbo.FM_Assure.strAssureID AS N'业务编号', dbo.FM_Assure.dtDate AS N'日期', \r\n      dbo.FM_Assure.strUnitCode AS N'担保单位编号', \r\n      dbo.FM_Unit.strUnitName AS N'担保单位名称', dbo.FM_Assure.strAssType AS N'担保形式', \r\n      dbo.FM_Assure.dtEndDate AS N'到期日期', dbo.FM_Assure.strExchName AS N'币种', \r\n      dbo.FM_Assure.dblAssure AS N'担保金额'\r\nFROM dbo.FM_Assure LEFT OUTER JOIN\r\n      dbo.FM_Unit ON \r\n      dbo.FM_Assure.strUnitCode = dbo.FM_Unit.strUnitID LEFT OUTER JOIN\r\n      dbo.VoucherTemplates ON dbo.FM_Assure.VT_ID = dbo.VoucherTemplates.VT_ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_AssFX"},{"field":"Type","value":"View"}],"columns":[{"id":"column-422964","object_id":"column-422964","name":"单据模版名称","name_without_path":"单据模版名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422965","object_id":"column-422965","name":"业务编号","name_without_path":"业务编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422966","object_id":"column-422966","name":"日期","name_without_path":"日期","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422967","object_id":"column-422967","name":"担保单位编号","name_without_path":"担保单位编号","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422968","object_id":"column-422968","name":"担保单位名称","name_without_path":"担保单位名称","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422969","object_id":"column-422969","name":"担保形式","name_without_path":"担保形式","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422970","object_id":"column-422970","name":"到期日期","name_without_path":"到期日期","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422971","object_id":"column-422971","name":"币种","name_without_path":"币种","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422972","object_id":"column-422972","name":"担保金额","name_without_path":"担保金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};