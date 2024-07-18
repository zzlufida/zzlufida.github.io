window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12357","name":"SEEKRECEIVE","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW SEEKRECEIVE AS\r\nSELECT 1 AS IVOUCHTYPE,V_HY_RECEIVEDETAIL.RECEIVEID AS ID,V_HY_RECEIVEDETAIL.RECEIVEDID AS AUTOID,V_HY_RECEIVE.CCODE,V_HY_RECEIVE.DDATE,V_HY_RECEIVE.CPERSONCODE,V_HY_RECEIVE.CPERSONNAME,V_HY_RECEIVE.CCREATEUSER AS CMAKER,\r\n\tCONVERT(nvarchar(20),V_HY_RECEIVEDETAIL.OPSEQ) AS COPCODE,CONVERT(nvarchar(120),V_HY_RECEIVEDETAIL.DESCRIPTION) AS CDESCRIPTION,\r\n\tV_HY_RECEIVEDETAIL.INVCODE AS CINVCODE,V_HY_RECEIVEDETAIL.INVNAME AS CINVNAME,V_HY_RECEIVE.CDEPCODE,V_HY_RECEIVE.CDEPNAME,\r\n        V_HY_RECEIVEDETAIL.INVFREE_1 AS CFREE1,V_HY_RECEIVEDETAIL.INVFREE_2 AS CFREE2,V_HY_RECEIVEDETAIL.INVFREE_3 AS CFREE3,V_HY_RECEIVEDETAIL.INVFREE_4 AS CFREE4,V_HY_RECEIVEDETAIL.INVFREE_5 AS CFREE5,\r\n\tV_HY_RECEIVEDETAIL.INVFREE_6 AS CFREE6,V_HY_RECEIVEDETAIL.INVFREE_7 AS CFREE7,V_HY_RECEIVEDETAIL.INVFREE_8 AS CFREE8,V_HY_RECEIVEDETAIL.INVFREE_9 AS CFREE9,V_HY_RECEIVEDETAIL.INVFREE_10 AS CFREE10, \r\n        V_HY_RECEIVEDETAIL.INVSPEC AS CINVSTD,V_HY_RECEIVEDETAIL.UNITCODE AS CCOMUNITCODE,V_HY_RECEIVEDETAIL.UNITNAME AS CCOMUNITNAME,V_HY_RECEIVEDETAIL.AUXUNITCODE AS CUNITID,\r\n\tV_HY_RECEIVEDETAIL.AUXUNITNAME AS CUNITNAME,V_HY_RECEIVEDETAIL.CHANGERATE AS FCHANGERATE,V_HY_RECEIVE.CVENABBNAME,V_HY_RECEIVE.CVENCODE,V_HY_RECEIVE.CVENNAME, \r\n        CONVERT(decimal(30),V_HY_RECEIVEDETAIL.QTY) AS FQTY,CONVERT(decimal(30),V_HY_RECEIVEDETAIL.AUXQTY) AS FNUM,CONVERT(decimal(30),V_HY_RECEIVEDETAIL.QUALIFIEDQTY) as QUALIFIEDQTY,CONVERT(decimal(30),V_HY_RECEIVEDETAIL.QUALIFIEDAUXQTY) AS AUXQUALIFIEDQTY,\r\n\tCONVERT(nvarchar(50),V_HY_RECEIVEDETAIL.QUALIFIEDREASON) as QUALIFIEDREASON,CONVERT(nvarchar(50),V_HY_RECEIVEDETAIL.QUALIFIEDREASONNAME) as QUALIFIEDREASONNAME, \r\n        V_HY_RECEIVEDETAIL.MATSCRAPQTY AS FMASCRAPQTY,V_HY_RECEIVEDETAIL.MATSCRAPAUXQTY AS FMASCRAPNUM,CONVERT(NVARCHAR(50),V_HY_RECEIVEDETAIL.MATSCRAPREASON) AS CMASCRAPREASONCODE,V_HY_RECEIVEDETAIL.MATSCRAPREASONNAME AS CMASCRAPREASONNAME,\r\n\tV_HY_RECEIVEDETAIL.LABSCRAPAUXQTY AS FOPSCRAPNUM,V_HY_RECEIVEDETAIL.LABSCRAPQTY AS FOPSCRAPQTY,CONVERT(NVARCHAR(50),V_HY_RECEIVEDETAIL.LABSCRAPREASON) AS COPSCRAPREASONCODE,V_HY_RECEIVEDETAIL.LABSCRAPREASONNAME AS COPSCRAPREASONNAME,\r\n\tV_HY_RECEIVEDETAIL.REWORKQTY AS FREDOQUANTITY,V_HY_RECEIVEDETAIL.REWORKAUXQTY AS FREDONUM,CONVERT(NVARCHAR(50),V_HY_RECEIVEDETAIL.REWORKREASON) AS CREDOREASONCODE,V_HY_RECEIVEDETAIL.REWORKREASONNAME AS CREDOREASONNAME, \r\n\tCONVERT(decimal(40), null) AS FINLOSTQUANTITY,CONVERT(decimal(40), null) AS FINLOSTNUM,CONVERT(NVARCHAR(60), N'') AS CINLOSTREASONCODE,CONVERT(NVARCHAR(60), N'') AS CINLOSTREASONNAME,\r\n\tCONVERT(decimal(40), null) AS FLOSTQUANTITY,CONVERT(decimal(40), null) AS FLOSTNUM,CONVERT(NVARCHAR(60), N'') as CLOSTREASONCODE,CONVERT(NVARCHAR(60), N'') as CLOSTREASONNAME,\r\n\tV_HY_RECEIVEDETAIL.IUSEDVOUCHAUTOID,V_HY_RECEIVEDETAIL.CUSEDVOUCHCODE,\r\n        V_HY_RECEIVEDETAIL.HYCODE AS CHYORDERCODE,V_HY_RECEIVEDETAIL.HYDID AS IHYORDERDID,V_HY_RECEIVEDETAIL.MOCODE AS CMOORDERCODE,V_HY_RECEIVEDETAIL.MOSEQ AS IMOORDERSEQ,\r\n\tV_HY_RECEIVEDETAIL.MODEPTCODE AS CPRODEPCODE,CONVERT(nvarchar(30),V_HY_RECEIVEDETAIL.MODEPTNAME) AS CPRODEPNAME,V_HY_RECEIVEDETAIL.MOLOTCODE AS CMOLOT,\r\n\tV_HY_RECEIVE.IVTID,INVENTORY.IID AS CINVAUTHID,VENDOR.IID AS CVENAUTHID \r\n        FROM V_HY_RECEIVE  \r\n        INNER JOIN V_HY_RECEIVEDETAIL ON V_HY_RECEIVEDETAIL.RECEIVEID=V_HY_RECEIVE.RECEIVEID \r\n        INNER JOIN HY_USEDBODY ON HY_USEDBODY.AUTOID=V_HY_RECEIVEDETAIL.IUSEDVOUCHAUTOID \r\n\tLEFT JOIN INVENTORY ON INVENTORY.CINVCODE=V_HY_RECEIVEDETAIL.INVCODE\r\n\tLEFT JOIN VENDOR ON VENDOR.CVENCODE=V_HY_RECEIVE.CVENCODE\r\n\tLEFT JOIN DEPARTMENT ON DEPARTMENT.CDEPCODE=V_HY_RECEIVE.CDEPCODE\r\n\tLEFT JOIN PERSON ON PERSON.CPERSONCODE=V_HY_RECEIVE.CPERSONCODE\r\n\t--INNER JOIN HY_USEDHEAD ON HY_USEDHEAD.CCODE=V_HY_RECEIVEDETAIL.CUSEDVOUCHCODE","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SEEKRECEIVE"},{"field":"Type","value":"View"}],"columns":[{"id":"column-300470","object_id":"column-300470","name":"IVOUCHTYPE","name_without_path":"IVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300471","object_id":"column-300471","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300472","object_id":"column-300472","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300473","object_id":"column-300473","name":"CCODE","name_without_path":"CCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300474","object_id":"column-300474","name":"DDATE","name_without_path":"DDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300475","object_id":"column-300475","name":"CPERSONCODE","name_without_path":"CPERSONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300476","object_id":"column-300476","name":"CPERSONNAME","name_without_path":"CPERSONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300477","object_id":"column-300477","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300478","object_id":"column-300478","name":"COPCODE","name_without_path":"COPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300479","object_id":"column-300479","name":"CDESCRIPTION","name_without_path":"CDESCRIPTION","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300480","object_id":"column-300480","name":"CINVCODE","name_without_path":"CINVCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300481","object_id":"column-300481","name":"CINVNAME","name_without_path":"CINVNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300482","object_id":"column-300482","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300483","object_id":"column-300483","name":"CDEPNAME","name_without_path":"CDEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300484","object_id":"column-300484","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300485","object_id":"column-300485","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300486","object_id":"column-300486","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300487","object_id":"column-300487","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300488","object_id":"column-300488","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300489","object_id":"column-300489","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300490","object_id":"column-300490","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300491","object_id":"column-300491","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300492","object_id":"column-300492","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300493","object_id":"column-300493","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300494","object_id":"column-300494","name":"CINVSTD","name_without_path":"CINVSTD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300495","object_id":"column-300495","name":"CCOMUNITCODE","name_without_path":"CCOMUNITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300496","object_id":"column-300496","name":"CCOMUNITNAME","name_without_path":"CCOMUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300497","object_id":"column-300497","name":"CUNITID","name_without_path":"CUNITID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"70","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300498","object_id":"column-300498","name":"CUNITNAME","name_without_path":"CUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300499","object_id":"column-300499","name":"FCHANGERATE","name_without_path":"FCHANGERATE","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300500","object_id":"column-300500","name":"CVENABBNAME","name_without_path":"CVENABBNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300501","object_id":"column-300501","name":"CVENCODE","name_without_path":"CVENCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300502","object_id":"column-300502","name":"CVENNAME","name_without_path":"CVENNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300503","object_id":"column-300503","name":"FQTY","name_without_path":"FQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300504","object_id":"column-300504","name":"FNUM","name_without_path":"FNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300505","object_id":"column-300505","name":"QUALIFIEDQTY","name_without_path":"QUALIFIEDQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300506","object_id":"column-300506","name":"AUXQUALIFIEDQTY","name_without_path":"AUXQUALIFIEDQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300507","object_id":"column-300507","name":"QUALIFIEDREASON","name_without_path":"QUALIFIEDREASON","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300508","object_id":"column-300508","name":"QUALIFIEDREASONNAME","name_without_path":"QUALIFIEDREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300509","object_id":"column-300509","name":"FMASCRAPQTY","name_without_path":"FMASCRAPQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300510","object_id":"column-300510","name":"FMASCRAPNUM","name_without_path":"FMASCRAPNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300511","object_id":"column-300511","name":"CMASCRAPREASONCODE","name_without_path":"CMASCRAPREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300512","object_id":"column-300512","name":"CMASCRAPREASONNAME","name_without_path":"CMASCRAPREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300513","object_id":"column-300513","name":"FOPSCRAPNUM","name_without_path":"FOPSCRAPNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300514","object_id":"column-300514","name":"FOPSCRAPQTY","name_without_path":"FOPSCRAPQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300515","object_id":"column-300515","name":"COPSCRAPREASONCODE","name_without_path":"COPSCRAPREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300516","object_id":"column-300516","name":"COPSCRAPREASONNAME","name_without_path":"COPSCRAPREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300517","object_id":"column-300517","name":"FREDOQUANTITY","name_without_path":"FREDOQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300518","object_id":"column-300518","name":"FREDONUM","name_without_path":"FREDONUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300519","object_id":"column-300519","name":"CREDOREASONCODE","name_without_path":"CREDOREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300520","object_id":"column-300520","name":"CREDOREASONNAME","name_without_path":"CREDOREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300521","object_id":"column-300521","name":"FINLOSTQUANTITY","name_without_path":"FINLOSTQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300522","object_id":"column-300522","name":"FINLOSTNUM","name_without_path":"FINLOSTNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300523","object_id":"column-300523","name":"CINLOSTREASONCODE","name_without_path":"CINLOSTREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300524","object_id":"column-300524","name":"CINLOSTREASONNAME","name_without_path":"CINLOSTREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300525","object_id":"column-300525","name":"FLOSTQUANTITY","name_without_path":"FLOSTQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300526","object_id":"column-300526","name":"FLOSTNUM","name_without_path":"FLOSTNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300527","object_id":"column-300527","name":"CLOSTREASONCODE","name_without_path":"CLOSTREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300528","object_id":"column-300528","name":"CLOSTREASONNAME","name_without_path":"CLOSTREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300529","object_id":"column-300529","name":"IUSEDVOUCHAUTOID","name_without_path":"IUSEDVOUCHAUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300530","object_id":"column-300530","name":"CUSEDVOUCHCODE","name_without_path":"CUSEDVOUCHCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300531","object_id":"column-300531","name":"CHYORDERCODE","name_without_path":"CHYORDERCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300532","object_id":"column-300532","name":"IHYORDERDID","name_without_path":"IHYORDERDID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300533","object_id":"column-300533","name":"CMOORDERCODE","name_without_path":"CMOORDERCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300534","object_id":"column-300534","name":"IMOORDERSEQ","name_without_path":"IMOORDERSEQ","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300535","object_id":"column-300535","name":"CPRODEPCODE","name_without_path":"CPRODEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300536","object_id":"column-300536","name":"CPRODEPNAME","name_without_path":"CPRODEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300537","object_id":"column-300537","name":"CMOLOT","name_without_path":"CMOLOT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300538","object_id":"column-300538","name":"IVTID","name_without_path":"IVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300539","object_id":"column-300539","name":"CINVAUTHID","name_without_path":"CINVAUTHID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300540","object_id":"column-300540","name":"CVENAUTHID","name_without_path":"CVENAUTHID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};