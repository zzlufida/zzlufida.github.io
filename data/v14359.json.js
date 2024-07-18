window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14359","name":"vwVoucherBody","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwVoucherBody\r\nAS\r\nSELECT UA_SubVoucher.intID, UA_SubVoucher.strIncNode, \r\n      UA_IncomeExpenditureItem.strIncExpItemName, \r\n      UA_SubVoucher.strCapitalPropertyID, \r\n      UA_CapitalProperty.strCapitalPropertyName AS strCapPropName, \r\n      UA_SubVoucher.strBudgetType, UA_SubVoucher.dblAmount, \r\n      UA_SubVoucher.strDescription, UA_SubVoucher.strDefine1, \r\n      UA_SubVoucher.strDefine2, UA_SubVoucher.strDefine3, UA_SubVoucher.strDefine4, \r\n      UA_SubVoucher.strDefine5, UA_SubVoucher.strDefine6, UA_SubVoucher.strDefine7, \r\n      UA_SubVoucher.intNoID, SUM(CONVERT(decimal(20, 2), \r\n      (CASE UA_Voucher.strUnitName WHEN 'false' THEN (CASE WHEN UA_Voucher_FZHS_Sub.dblMoney\r\n       IS NULL \r\n      THEN UA_SubVoucher.dblAmount ELSE UA_Voucher_FZHS_Sub.dblMoney END) \r\n      / UA_Voucher.sngExchangeRate ELSE UA_Voucher.sngExchangeRate * (CASE WHEN UA_Voucher_FZHS_Sub.dblMoney\r\n       IS NULL \r\n      THEN UA_SubVoucher.dblAmount ELSE UA_Voucher_FZHS_Sub.dblMoney END) \r\n      END))) AS dblOldAmount, UA_SubVoucher.dblPrice, UA_SubVoucher.dblNumber\r\nFROM UA_SubVoucher INNER JOIN\r\n      UA_Voucher ON UA_SubVoucher.intNoID = UA_Voucher.intNoID LEFT OUTER JOIN\r\n      UA_CapitalProperty ON \r\n      UA_SubVoucher.strCapitalPropertyID = UA_CapitalProperty.strCapitalPropertyID LEFT OUTER\r\n       JOIN\r\n      UA_IncomeExpenditureItem ON \r\n      UA_SubVoucher.strIncNode = UA_IncomeExpenditureItem.strIncNode LEFT JOIN\r\n      UA_Voucher_FZHS_Sub ON \r\n      UA_Voucher_FZHS_Sub.intnoid = UA_SubVoucher.intid\r\nGROUP BY UA_SubVoucher.intID, UA_SubVoucher.strIncNode, \r\n      UA_IncomeExpenditureItem.strIncExpItemName, \r\n      UA_SubVoucher.strCapitalPropertyID, UA_CapitalProperty.strCapitalPropertyName, \r\n      UA_SubVoucher.strBudgetType, UA_SubVoucher.dblAmount, \r\n      UA_SubVoucher.strDescription, UA_SubVoucher.strDefine1, \r\n      UA_SubVoucher.strDefine2, UA_SubVoucher.strDefine3, UA_SubVoucher.strDefine4, \r\n      UA_SubVoucher.strDefine5, UA_SubVoucher.strDefine6, UA_SubVoucher.strDefine7, \r\n      UA_SubVoucher.intNoID, UA_SubVoucher.dblPrice, UA_SubVoucher.dblNumber","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwVoucherBody"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424764","object_id":"column-424764","name":"intID","name_without_path":"intID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424765","object_id":"column-424765","name":"strIncNode","name_without_path":"strIncNode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424766","object_id":"column-424766","name":"strIncExpItemName","name_without_path":"strIncExpItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424767","object_id":"column-424767","name":"strCapitalPropertyID","name_without_path":"strCapitalPropertyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424768","object_id":"column-424768","name":"strCapPropName","name_without_path":"strCapPropName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424769","object_id":"column-424769","name":"strBudgetType","name_without_path":"strBudgetType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424770","object_id":"column-424770","name":"dblAmount","name_without_path":"dblAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424771","object_id":"column-424771","name":"strDescription","name_without_path":"strDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424772","object_id":"column-424772","name":"strDefine1","name_without_path":"strDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424773","object_id":"column-424773","name":"strDefine2","name_without_path":"strDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424774","object_id":"column-424774","name":"strDefine3","name_without_path":"strDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424775","object_id":"column-424775","name":"strDefine4","name_without_path":"strDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424776","object_id":"column-424776","name":"strDefine5","name_without_path":"strDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424777","object_id":"column-424777","name":"strDefine6","name_without_path":"strDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424778","object_id":"column-424778","name":"strDefine7","name_without_path":"strDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424779","object_id":"column-424779","name":"intNoID","name_without_path":"intNoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424780","object_id":"column-424780","name":"dblOldAmount","name_without_path":"dblOldAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424781","object_id":"column-424781","name":"dblPrice","name_without_path":"dblPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424782","object_id":"column-424782","name":"dblNumber","name_without_path":"dblNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};