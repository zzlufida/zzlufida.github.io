window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12909","name":"v_ex_ciqwaste","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_ciqwaste as \r\nselect \r\nciqw.id,\r\nciqw.guid,\r\nciqw.cinvcode,\r\nciqinv.cciqcode,\r\nciqinv.cciqname,\r\ninv.cciqinvstd as cinvstd,\r\ninv.cciqinvname as cinvname,\r\ninv.cciqunitcode as ccomunitcode ,\r\nunit.ccomunitname ,\r\nciqw.cnote,\r\nciqinv.fimtaxrate,\r\nciqinv.fextaxrate,\r\nciqinv.fexrettaxrate,\r\nciqw.fwholequantity,\r\n(cast( null as nvarchar(60))) as cinvdefine1,\r\n(cast( null as nvarchar(60))) as cinvdefine2,\r\n(cast( null as nvarchar(60))) as cinvdefine3,\r\n(cast( null as nvarchar(60))) as cinvdefine4,\r\n(cast( null as nvarchar(60))) as cinvdefine5,\r\n(cast( null as nvarchar(60))) as cinvdefine6,\r\n(cast( null as nvarchar(60))) as cinvdefine7,\r\n(cast( null as nvarchar(60))) as cinvdefine8,\r\n(cast( null as nvarchar(60))) as cinvdefine9,\r\n(cast( null as nvarchar(60))) as cinvdefine10,\r\n(cast( null as nvarchar(60))) as cinvdefine11,\r\n(cast( null as nvarchar(60))) as cinvdefine12,\r\n(cast( null as nvarchar(60))) as cinvdefine13,\r\n(cast( null as nvarchar(60))) as cinvdefine14,\r\n(cast( null as nvarchar(60))) as cinvdefine15,\r\n(cast( null as nvarchar(60))) as cinvdefine16,\r\nciqw.ivtid,convert(nchar, convert(money,ciqw.ufts), 2) as ufts ,\r\nciqw.cvouchtype\r\nfrom ex_ciqwaste ciqw \r\nleft join ex_ciqinv inv on ciqw.cinvcode=inv.cciqinvcode\r\nleft join computationunit unit on inv.cciqunitcode=unit.ccomunitcode\r\nleft join ex_ciqarchive ciqinv on inv.cciqcode=ciqinv.cciqcode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_ciqwaste"},{"field":"Type","value":"View"}],"columns":[{"id":"column-325695","object_id":"column-325695","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325696","object_id":"column-325696","name":"guid","name_without_path":"guid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325697","object_id":"column-325697","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325698","object_id":"column-325698","name":"cciqcode","name_without_path":"cciqcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325699","object_id":"column-325699","name":"cciqname","name_without_path":"cciqname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325700","object_id":"column-325700","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325701","object_id":"column-325701","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325702","object_id":"column-325702","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325703","object_id":"column-325703","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325704","object_id":"column-325704","name":"cnote","name_without_path":"cnote","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325705","object_id":"column-325705","name":"fimtaxrate","name_without_path":"fimtaxrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 9","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325706","object_id":"column-325706","name":"fextaxrate","name_without_path":"fextaxrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 9","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325707","object_id":"column-325707","name":"fexrettaxrate","name_without_path":"fexrettaxrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 9","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325708","object_id":"column-325708","name":"fwholequantity","name_without_path":"fwholequantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325709","object_id":"column-325709","name":"cinvdefine1","name_without_path":"cinvdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325710","object_id":"column-325710","name":"cinvdefine2","name_without_path":"cinvdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325711","object_id":"column-325711","name":"cinvdefine3","name_without_path":"cinvdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325712","object_id":"column-325712","name":"cinvdefine4","name_without_path":"cinvdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325713","object_id":"column-325713","name":"cinvdefine5","name_without_path":"cinvdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325714","object_id":"column-325714","name":"cinvdefine6","name_without_path":"cinvdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325715","object_id":"column-325715","name":"cinvdefine7","name_without_path":"cinvdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325716","object_id":"column-325716","name":"cinvdefine8","name_without_path":"cinvdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325717","object_id":"column-325717","name":"cinvdefine9","name_without_path":"cinvdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325718","object_id":"column-325718","name":"cinvdefine10","name_without_path":"cinvdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325719","object_id":"column-325719","name":"cinvdefine11","name_without_path":"cinvdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325720","object_id":"column-325720","name":"cinvdefine12","name_without_path":"cinvdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325721","object_id":"column-325721","name":"cinvdefine13","name_without_path":"cinvdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325722","object_id":"column-325722","name":"cinvdefine14","name_without_path":"cinvdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325723","object_id":"column-325723","name":"cinvdefine15","name_without_path":"cinvdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325724","object_id":"column-325724","name":"cinvdefine16","name_without_path":"cinvdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325725","object_id":"column-325725","name":"ivtid","name_without_path":"ivtid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325726","object_id":"column-325726","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325727","object_id":"column-325727","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};