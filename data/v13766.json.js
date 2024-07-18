window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13766","name":"V_OperationStartOptions","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.V_OperationStartOptions as\r\n\r\nSELECT     CAST(b.Action AS nvarchar(100)) AS cFld, a.LocaleID, 'AA.ARCHIVE.boolean' AS EnumType, a.BillTypeName AS cKey, \r\n\t\tBillCaption +'--'+(SELECT EnumName\r\n                FROM   dbo.AA_Enum aa\r\n                WHERE (EnumType = N'MO.VariationAction') AND (EnumCode = b.Action) and (aa.LocaleId = a.LocaleID)) AS cCaption, '1' AS IsEnum\r\n        \r\nFROM         dbo.V_ArchAndVoucher  a LEFT OUTER JOIN\r\n                      dbo.VariationBillOptions AS b ON a.BillTypeName = b.BillTypeName\r\nWHERE     (a.cProductId IN\r\n                          (SELECT     cSub_Id\r\n                            FROM          UFSystem.dbo.UA_Account_sub\r\n                            WHERE      (iYear = '9999') AND (NOT (dSubSysUsed IS NULL))\r\n                            UNION\r\n                            SELECT     cSub_Id\r\n                            FROM         UFSystem.dbo.UA_SubSys\r\n                            WHERE     (nType = 1) OR\r\n                                                  (nType IS NULL)\r\n                            UNION\r\n                            SELECT     'AA' AS cSub_Id))","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_OperationStartOptions"},{"field":"Type","value":"View"}],"columns":[{"id":"column-397943","object_id":"column-397943","name":"cFld","name_without_path":"cFld","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397944","object_id":"column-397944","name":"LocaleID","name_without_path":"LocaleID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397945","object_id":"column-397945","name":"EnumType","name_without_path":"EnumType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397948","object_id":"column-397948","name":"cKey","name_without_path":"cKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397946","object_id":"column-397946","name":"cCaption","name_without_path":"cCaption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"652","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-397947","object_id":"column-397947","name":"IsEnum","name_without_path":"IsEnum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};