window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10607","name":"EQ_QPlanTroubleList","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View EQ_QPlanTroubleList\r\nAS\r\nselect P.cBillCode,P.intLine,P.cTroubleCode,T.cTroubleMemo,T.cTroubleTypeCode,TT.cTroubleTypeName,\r\nT.cCause,T.cCause As cCauseName,T.cPart,T.FTrouble,\r\nP.cDefine22,P.cDefine23,P.cDefine24,P.cDefine25,P.cDefine26,P.cDefine27,P.cDefine28,P.cDefine29,\r\nP.cDefine30,P.cDefine31,P.cDefine32,P.cDefine33,P.cDefine34,P.cDefine35,P.cDefine36,P.cDefine37,convert(nvarchar, convert(money, P.ufts), 2) as ufts \r\nfrom EQ_PlanTroubleList P\r\nLeft Join EQ_TroubleDetail T On P.cTroubleCode=T.cTroubleCode And P.intLine=T.intLine\r\nleft Join EQ_TroubleType TT On TT.cTroubleTypeCode=T.cTroubleTypeCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_QPlanTroubleList"},{"field":"Type","value":"View"}],"columns":[{"id":"column-197418","object_id":"column-197418","name":"cBillCode","name_without_path":"cBillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197419","object_id":"column-197419","name":"intLine","name_without_path":"intLine","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197420","object_id":"column-197420","name":"cTroubleCode","name_without_path":"cTroubleCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197421","object_id":"column-197421","name":"cTroubleMemo","name_without_path":"cTroubleMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197422","object_id":"column-197422","name":"cTroubleTypeCode","name_without_path":"cTroubleTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197423","object_id":"column-197423","name":"cTroubleTypeName","name_without_path":"cTroubleTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197424","object_id":"column-197424","name":"cCause","name_without_path":"cCause","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"254","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197425","object_id":"column-197425","name":"cCauseName","name_without_path":"cCauseName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"254","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197426","object_id":"column-197426","name":"cPart","name_without_path":"cPart","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197427","object_id":"column-197427","name":"FTrouble","name_without_path":"FTrouble","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197428","object_id":"column-197428","name":"cDefine22","name_without_path":"cDefine22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197429","object_id":"column-197429","name":"cDefine23","name_without_path":"cDefine23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197430","object_id":"column-197430","name":"cDefine24","name_without_path":"cDefine24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197431","object_id":"column-197431","name":"cDefine25","name_without_path":"cDefine25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197432","object_id":"column-197432","name":"cDefine26","name_without_path":"cDefine26","description":null,"is_pk":false,"is_identity":false,"data_type":"real","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197433","object_id":"column-197433","name":"cDefine27","name_without_path":"cDefine27","description":null,"is_pk":false,"is_identity":false,"data_type":"real","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197434","object_id":"column-197434","name":"cDefine28","name_without_path":"cDefine28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197435","object_id":"column-197435","name":"cDefine29","name_without_path":"cDefine29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197436","object_id":"column-197436","name":"cDefine30","name_without_path":"cDefine30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197437","object_id":"column-197437","name":"cDefine31","name_without_path":"cDefine31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197438","object_id":"column-197438","name":"cDefine32","name_without_path":"cDefine32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197439","object_id":"column-197439","name":"cDefine33","name_without_path":"cDefine33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197440","object_id":"column-197440","name":"cDefine34","name_without_path":"cDefine34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197441","object_id":"column-197441","name":"cDefine35","name_without_path":"cDefine35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197442","object_id":"column-197442","name":"cDefine36","name_without_path":"cDefine36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197443","object_id":"column-197443","name":"cDefine37","name_without_path":"cDefine37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197444","object_id":"column-197444","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};