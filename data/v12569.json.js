window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12569","name":"TI_V_InvoiceLoadLog","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW TI_V_InvoiceLoadLog \r\nAS\r\nSelect Auto_ID,cEIveCode,cEIveName,cEIveAddress,cEIveType,\r\ncEIveAction,cEIveState,u.cUser_Name cOperator,cStation,dLogTime,cExplain,b.cIveTypeName, \r\ncase when isnull(s.cStateName,'')='' then '其他错误' else s.cStateName end as cEIveStateName, n.EnumName as cEIveActionName\r\nFrom (\r\nselect Auto_ID,cEIveCode,cEIveName,cEIveAddress,cEIveType,\r\ncEIveAction,cEIveState,a.cOperator,cStation,dLogTime,cExplain\r\nfrom TI_EleInvoice a \r\nwhere a.cEIveType<='6' and (a.cEIveAction='1' or a.cEIveAction='2' or a.cEIveAction='9')\r\nand isnull(a.cEIveName,'')<>''\r\nUnion all\r\nselect Auto_ID,cEIveCode,cEIveCode cEIveName,cEIveAddress,cEIveType,\r\nright(cEIveType,2) cEIveAction,cEIveState,a.cOperator,cStation,dLogTime,cExplain\r\nfrom TI_EleInvoice a  \r\nwhere (a.cEIveType='IC11' or a.cEIveType='IC12') and a.cEIveAction='999' \r\nUnion all\r\nselect Auto_ID,cEIveCode,cEIveName,cEIveAddress,cEIveType,\r\ncEIveAction,cEIveState,a.cOperator,cStation,dLogTime,cExplain\r\nfrom TI_EleInvoice a  \r\nwhere (a.cEIveType='IC01' or a.cEIveType='IC02') and (a.cEIveAction='11' or a.cEIveAction='12' or a.cEIveAction='9')\r\nUnion all\r\nselect Auto_ID,cEIveCode,cEIveName,cEIveAddress,cEIveType,\r\nright(cEIveType,2) cEIveAction,cEIveState,a.cOperator,cStation,dLogTime,cExplain\r\nfrom TI_EleInvoice a  \r\nwhere (a.cEIveType='23') and a.cEIveAction='23' \r\n) a\r\ninner join TI_InvoiceType b on a.cEIveType=b.cIveTypeCode\r\ninner join ufsystem..ua_user u on u.cUser_Id=a.cOperator\r\nleft join TI_StateType s on s.iInterType=1 and a.cEIveState=s.cStateCode\r\nleft Join AA_enum n on n.EnumType='TA.EleInvoiceAction' And a.cEIveAction=n.EnumCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TI_V_InvoiceLoadLog"},{"field":"Type","value":"View"}],"columns":[{"id":"column-312363","object_id":"column-312363","name":"Auto_ID","name_without_path":"Auto_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312364","object_id":"column-312364","name":"cEIveCode","name_without_path":"cEIveCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312365","object_id":"column-312365","name":"cEIveName","name_without_path":"cEIveName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312366","object_id":"column-312366","name":"cEIveAddress","name_without_path":"cEIveAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312367","object_id":"column-312367","name":"cEIveType","name_without_path":"cEIveType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312368","object_id":"column-312368","name":"cEIveAction","name_without_path":"cEIveAction","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312369","object_id":"column-312369","name":"cEIveState","name_without_path":"cEIveState","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312370","object_id":"column-312370","name":"cOperator","name_without_path":"cOperator","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312371","object_id":"column-312371","name":"cStation","name_without_path":"cStation","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312372","object_id":"column-312372","name":"dLogTime","name_without_path":"dLogTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312373","object_id":"column-312373","name":"cExplain","name_without_path":"cExplain","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312374","object_id":"column-312374","name":"cIveTypeName","name_without_path":"cIveTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312375","object_id":"column-312375","name":"cEIveStateName","name_without_path":"cEIveStateName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312376","object_id":"column-312376","name":"cEIveActionName","name_without_path":"cEIveActionName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};