window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12902","name":"v_ex_ciqbookex","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_ciqbookex as \r\n\r\nselect ex_ciqbookex.id,ex_ciqbookex.irowno,ex_ciqbookex.autoid,ex_ciqbookex.cinvcode,\r\nex_ciqbookex.ccuscode,customer.ccusname,\r\nex_ciqinv.cciqinvname as cinvname,ex_ciqinv.cciqcode,ex_ciqarchive.cciqname,ex_ciqinv.cciqinvstd as cinvstd,\r\nex_ciqinv.cciqunitcode as ccomunitcode,computationunit.ccomunitname,\r\nex_ciqbookex.cnationcode,null as cnationname,ex_ciqbookex.fquantity,ex_ciqbookex.fprice,\r\nex_ciqbookex.fnatprice,ex_ciqbookex.fmoney,ex_ciqbookex.fnatmoney,ex_ciqbookex.frejectquantity,\r\nex_ciqbookex.clevyproperty,ex_ciqbookex.finquantity,ex_ciqbookex.foutquantity,ex_ciqbookex.cnote,ex_ciqbookex.cnapeitem \r\nfrom ex_ciqbookex left join ex_ciqinv on ex_ciqbookex.cinvcode=ex_ciqinv.cciqinvcode\r\nleft join customer on ex_ciqbookex.ccuscode=customer.ccuscode \r\nleft join ex_ciqarchive on ex_ciqinv.cciqcode=ex_ciqarchive.cciqcode \r\nleft join computationunit on ex_ciqinv.cciqunitcode=computationunit.ccomunitcode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_ciqbookex"},{"field":"Type","value":"View"}],"columns":[{"id":"column-325442","object_id":"column-325442","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325443","object_id":"column-325443","name":"irowno","name_without_path":"irowno","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325444","object_id":"column-325444","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325445","object_id":"column-325445","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325446","object_id":"column-325446","name":"ccuscode","name_without_path":"ccuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325447","object_id":"column-325447","name":"ccusname","name_without_path":"ccusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325448","object_id":"column-325448","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325449","object_id":"column-325449","name":"cciqcode","name_without_path":"cciqcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325450","object_id":"column-325450","name":"cciqname","name_without_path":"cciqname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325451","object_id":"column-325451","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325452","object_id":"column-325452","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325453","object_id":"column-325453","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325454","object_id":"column-325454","name":"cnationcode","name_without_path":"cnationcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325455","object_id":"column-325455","name":"cnationname","name_without_path":"cnationname","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325456","object_id":"column-325456","name":"fquantity","name_without_path":"fquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325457","object_id":"column-325457","name":"fprice","name_without_path":"fprice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325458","object_id":"column-325458","name":"fnatprice","name_without_path":"fnatprice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325459","object_id":"column-325459","name":"fmoney","name_without_path":"fmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325460","object_id":"column-325460","name":"fnatmoney","name_without_path":"fnatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325461","object_id":"column-325461","name":"frejectquantity","name_without_path":"frejectquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325462","object_id":"column-325462","name":"clevyproperty","name_without_path":"clevyproperty","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325463","object_id":"column-325463","name":"finquantity","name_without_path":"finquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325464","object_id":"column-325464","name":"foutquantity","name_without_path":"foutquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325465","object_id":"column-325465","name":"cnote","name_without_path":"cnote","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-325466","object_id":"column-325466","name":"cnapeitem","name_without_path":"cnapeitem","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};