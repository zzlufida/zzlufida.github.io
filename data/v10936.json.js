window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10936","name":"GSP_QDUTYCHKLIST","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW DBO.GSP_QDUTYCHKLIST  \r\nAS  \r\nSELECT DBO.GSP_QDUTYCHKB.ID, DBO.GSP_QDUTYCHKB.CDEPCODE,   \r\n      DBO.GSP_QDUTYCHKB.CDEPNAME, DBO.GSP_QDUTYCHKB.CCHKYEAR,   \r\n      DBO.GSP_QDUTYCHKB.CCHKQUARTER, DBO.GSP_QDUTYCHKB.ISUM,   \r\n      DBO.GSP_QDUTYCHKB.CMLEADER, DBO.GSP_QDUTYCHKB.CDEPLEADER,   \r\n      DBO.GSP_QDUTYCHKB.CCHECKER, DBO.GSP_QDUTYCHKB.DCHKDATE,   \r\n      DBO.GSP_QDUTYCHKB.CVOUCHTYPE, DBO.GSP_QDUTYCHKB.IVTID,   \r\n      DBO.GSP_QDUTYCHKT.AUTOID, DBO.GSP_QDUTYCHKT.CEXPONENTNAME,   \r\n      DBO.GSP_QDUTYCHKT.CEXPONENT, DBO.GSP_QDUTYCHKT.CFINISH,   \r\n      DBO.GSP_QDUTYCHKT.FFINISHRATE, DBO.GSP_QDUTYCHKT.FSTANDARD,   \r\n      DBO.GSP_QDUTYCHKT.FANALYSIS, DBO.GSP_QDUTYCHKB.CID,   \r\n      DBO.GSP_QDUTYCHKB.CMAKER, DBO.GSP_QDUTYCHKB.CVERIFIER,   \r\n      DBO.GSP_QDUTYCHKB.UFTS, DBO.GSP_QDUTYCHKT.CITEM,   \r\n      DBO.GSP_QDUTYCHKB.CDEFINE1, DBO.GSP_QDUTYCHKB.CDEFINE2,   \r\n      DBO.GSP_QDUTYCHKB.CDEFINE3, DBO.GSP_QDUTYCHKB.CDEFINE4,   \r\n      DBO.GSP_QDUTYCHKB.CDEFINE5, DBO.GSP_QDUTYCHKB.CDEFINE6,   \r\n      DBO.GSP_QDUTYCHKB.CDEFINE7, DBO.GSP_QDUTYCHKB.CDEFINE8,   \r\n      DBO.GSP_QDUTYCHKB.CDEFINE9, DBO.GSP_QDUTYCHKB.CDEFINE10,   \r\n      DBO.GSP_QDUTYCHKB.CDEFINE11, DBO.GSP_QDUTYCHKB.CDEFINE12,   \r\n      DBO.GSP_QDUTYCHKB.CDEFINE13, DBO.GSP_QDUTYCHKB.CDEFINE14,   \r\n      DBO.GSP_QDUTYCHKB.CDEFINE15, DBO.GSP_QDUTYCHKB.CDEFINE16,   \r\n      DBO.GSP_QDUTYCHKT.CDEFINE22, DBO.GSP_QDUTYCHKT.CDEFINE23,   \r\n      DBO.GSP_QDUTYCHKT.CDEFINE24, DBO.GSP_QDUTYCHKT.CDEFINE25,   \r\n      DBO.GSP_QDUTYCHKT.CDEFINE26, DBO.GSP_QDUTYCHKT.CDEFINE27,   \r\n      DBO.GSP_QDUTYCHKT.CDEFINE28, DBO.GSP_QDUTYCHKT.CDEFINE29,   \r\n      DBO.GSP_QDUTYCHKT.CDEFINE30, DBO.GSP_QDUTYCHKT.CDEFINE31,   \r\n      DBO.GSP_QDUTYCHKT.CDEFINE32, DBO.GSP_QDUTYCHKT.CDEFINE33,   \r\n      DBO.GSP_QDUTYCHKT.CDEFINE34, DBO.GSP_QDUTYCHKT.CDEFINE35,   \r\n      DBO.GSP_QDUTYCHKT.CDEFINE36, DBO.GSP_QDUTYCHKT.CDEFINE37  \r\nFROM DBO.GSP_QDUTYCHKB INNER JOIN  \r\n      DBO.GSP_QDUTYCHKT ON DBO.GSP_QDUTYCHKB.ID = DBO.GSP_QDUTYCHKT.ID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GSP_QDUTYCHKLIST"},{"field":"Type","value":"View"}],"columns":[{"id":"column-210540","object_id":"column-210540","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210541","object_id":"column-210541","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210542","object_id":"column-210542","name":"CDEPNAME","name_without_path":"CDEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210543","object_id":"column-210543","name":"CCHKYEAR","name_without_path":"CCHKYEAR","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210544","object_id":"column-210544","name":"CCHKQUARTER","name_without_path":"CCHKQUARTER","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210545","object_id":"column-210545","name":"ISUM","name_without_path":"ISUM","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210546","object_id":"column-210546","name":"CMLEADER","name_without_path":"CMLEADER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210547","object_id":"column-210547","name":"CDEPLEADER","name_without_path":"CDEPLEADER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210548","object_id":"column-210548","name":"CCHECKER","name_without_path":"CCHECKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210549","object_id":"column-210549","name":"DCHKDATE","name_without_path":"DCHKDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210550","object_id":"column-210550","name":"CVOUCHTYPE","name_without_path":"CVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210551","object_id":"column-210551","name":"IVTID","name_without_path":"IVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210552","object_id":"column-210552","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210553","object_id":"column-210553","name":"CEXPONENTNAME","name_without_path":"CEXPONENTNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210554","object_id":"column-210554","name":"CEXPONENT","name_without_path":"CEXPONENT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210555","object_id":"column-210555","name":"CFINISH","name_without_path":"CFINISH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210556","object_id":"column-210556","name":"FFINISHRATE","name_without_path":"FFINISHRATE","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210557","object_id":"column-210557","name":"FSTANDARD","name_without_path":"FSTANDARD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210558","object_id":"column-210558","name":"FANALYSIS","name_without_path":"FANALYSIS","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210559","object_id":"column-210559","name":"CID","name_without_path":"CID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210560","object_id":"column-210560","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210561","object_id":"column-210561","name":"CVERIFIER","name_without_path":"CVERIFIER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210562","object_id":"column-210562","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210563","object_id":"column-210563","name":"CITEM","name_without_path":"CITEM","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210564","object_id":"column-210564","name":"CDEFINE1","name_without_path":"CDEFINE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210565","object_id":"column-210565","name":"CDEFINE2","name_without_path":"CDEFINE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210566","object_id":"column-210566","name":"CDEFINE3","name_without_path":"CDEFINE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210567","object_id":"column-210567","name":"CDEFINE4","name_without_path":"CDEFINE4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210568","object_id":"column-210568","name":"CDEFINE5","name_without_path":"CDEFINE5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210569","object_id":"column-210569","name":"CDEFINE6","name_without_path":"CDEFINE6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210570","object_id":"column-210570","name":"CDEFINE7","name_without_path":"CDEFINE7","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210571","object_id":"column-210571","name":"CDEFINE8","name_without_path":"CDEFINE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210572","object_id":"column-210572","name":"CDEFINE9","name_without_path":"CDEFINE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210573","object_id":"column-210573","name":"CDEFINE10","name_without_path":"CDEFINE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210574","object_id":"column-210574","name":"CDEFINE11","name_without_path":"CDEFINE11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210575","object_id":"column-210575","name":"CDEFINE12","name_without_path":"CDEFINE12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210576","object_id":"column-210576","name":"CDEFINE13","name_without_path":"CDEFINE13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210577","object_id":"column-210577","name":"CDEFINE14","name_without_path":"CDEFINE14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210578","object_id":"column-210578","name":"CDEFINE15","name_without_path":"CDEFINE15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210579","object_id":"column-210579","name":"CDEFINE16","name_without_path":"CDEFINE16","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210580","object_id":"column-210580","name":"CDEFINE22","name_without_path":"CDEFINE22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210581","object_id":"column-210581","name":"CDEFINE23","name_without_path":"CDEFINE23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210582","object_id":"column-210582","name":"CDEFINE24","name_without_path":"CDEFINE24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210583","object_id":"column-210583","name":"CDEFINE25","name_without_path":"CDEFINE25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210584","object_id":"column-210584","name":"CDEFINE26","name_without_path":"CDEFINE26","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210585","object_id":"column-210585","name":"CDEFINE27","name_without_path":"CDEFINE27","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210586","object_id":"column-210586","name":"CDEFINE28","name_without_path":"CDEFINE28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210587","object_id":"column-210587","name":"CDEFINE29","name_without_path":"CDEFINE29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210588","object_id":"column-210588","name":"CDEFINE30","name_without_path":"CDEFINE30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210589","object_id":"column-210589","name":"CDEFINE31","name_without_path":"CDEFINE31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210590","object_id":"column-210590","name":"CDEFINE32","name_without_path":"CDEFINE32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210591","object_id":"column-210591","name":"CDEFINE33","name_without_path":"CDEFINE33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210592","object_id":"column-210592","name":"CDEFINE34","name_without_path":"CDEFINE34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210593","object_id":"column-210593","name":"CDEFINE35","name_without_path":"CDEFINE35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210594","object_id":"column-210594","name":"CDEFINE36","name_without_path":"CDEFINE36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-210595","object_id":"column-210595","name":"CDEFINE37","name_without_path":"CDEFINE37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};