window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11462","name":"HY_SEEKRECEIVE","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[HY_SEEKRECEIVE] AS  \r\nSELECT 1 AS IVOUCHTYPE,V_HY_RECEIVEDETAIL.RECEIVEID AS ID,V_HY_RECEIVEDETAIL.RECEIVEDID AS AUTOID,V_HY_RECEIVE.CCODE,V_HY_RECEIVE.DDATE,V_HY_RECEIVE.CPERSONCODE,V_HY_RECEIVE.CPERSONNAME,V_HY_RECEIVE.CCREATEUSER AS CMAKER,  \r\n CONVERT(nvarchar(20),V_HY_RECEIVEDETAIL.DOPSEQ) AS COPCODE,CONVERT(nvarchar(120),V_HY_RECEIVEDETAIL.DESCRIPTION) AS CDESCRIPTION,  \r\n V_HY_RECEIVEDETAIL.INVCODE AS CINVCODE,V_HY_RECEIVEDETAIL.INVNAME AS CINVNAME,V_HY_RECEIVE.CDEPCODE,V_HY_RECEIVE.CDEPNAME,  \r\n        V_HY_RECEIVEDETAIL.INVFREE_1 AS CFREE1,V_HY_RECEIVEDETAIL.INVFREE_2 AS CFREE2,V_HY_RECEIVEDETAIL.INVFREE_3 AS CFREE3,V_HY_RECEIVEDETAIL.INVFREE_4 AS CFREE4,V_HY_RECEIVEDETAIL.INVFREE_5 AS CFREE5,  \r\n V_HY_RECEIVEDETAIL.INVFREE_6 AS CFREE6,V_HY_RECEIVEDETAIL.INVFREE_7 AS CFREE7,V_HY_RECEIVEDETAIL.INVFREE_8 AS CFREE8,V_HY_RECEIVEDETAIL.INVFREE_9 AS CFREE9,V_HY_RECEIVEDETAIL.INVFREE_10 AS CFREE10,   \r\n        V_HY_RECEIVEDETAIL.INVSPEC AS CINVSTD,V_HY_RECEIVEDETAIL.UNITCODE AS CCOMUNITCODE,V_HY_RECEIVEDETAIL.UNITNAME AS CCOMUNITNAME,V_HY_RECEIVEDETAIL.AUXUNITCODE AS CUNITID,  \r\n V_HY_RECEIVEDETAIL.AUXUNITNAME AS CUNITNAME,V_HY_RECEIVEDETAIL.CHANGERATE AS FCHANGERATE,V_HY_RECEIVE.CVENABBNAME,V_HY_RECEIVE.CVENCODE,V_HY_RECEIVE.CVENNAME,   \r\n        CONVERT(decimal(30),V_HY_RECEIVEDETAIL.QTY) AS FQTY,CONVERT(decimal(30),V_HY_RECEIVEDETAIL.AUXQTY) AS FNUM,CONVERT(decimal(30),V_HY_RECEIVEDETAIL.QUALIFIEDQTY) as QUALIFIEDQTY,CONVERT(decimal(30),V_HY_RECEIVEDETAIL.QUALIFIEDAUXQTY) AS AUXQUALIFIEDQTY,  \r\n CONVERT(nvarchar(50),V_HY_RECEIVEDETAIL.QUALIFIEDREASON) as QUALIFIEDREASON,CONVERT(nvarchar(50),V_HY_RECEIVEDETAIL.QUALIFIEDREASONNAME) as QUALIFIEDREASONNAME,   \r\n        V_HY_RECEIVEDETAIL.MATSCRAPQTY AS FMASCRAPQTY,V_HY_RECEIVEDETAIL.MATSCRAPAUXQTY AS FMASCRAPNUM,CONVERT(NVARCHAR(50),V_HY_RECEIVEDETAIL.MATSCRAPREASON) AS CMASCRAPREASONCODE,V_HY_RECEIVEDETAIL.MATSCRAPREASONNAME AS CMASCRAPREASONNAME,  \r\n V_HY_RECEIVEDETAIL.LABSCRAPAUXQTY AS FOPSCRAPNUM,V_HY_RECEIVEDETAIL.LABSCRAPQTY AS FOPSCRAPQTY,CONVERT(NVARCHAR(50),V_HY_RECEIVEDETAIL.LABSCRAPREASON) AS COPSCRAPREASONCODE,V_HY_RECEIVEDETAIL.LABSCRAPREASONNAME AS COPSCRAPREASONNAME,  \r\n V_HY_RECEIVEDETAIL.REWORKQTY AS FREDOQUANTITY,V_HY_RECEIVEDETAIL.REWORKAUXQTY AS FREDONUM,CONVERT(NVARCHAR(50),V_HY_RECEIVEDETAIL.REWORKREASON) AS CREDOREASONCODE,V_HY_RECEIVEDETAIL.REWORKREASONNAME AS CREDOREASONNAME,   \r\n CONVERT(decimal(40), null) AS FINLOSTQUANTITY,CONVERT(decimal(40), null) AS FINLOSTNUM,CONVERT(NVARCHAR(60), N'') AS CINLOSTREASONCODE,CONVERT(NVARCHAR(60), N'') AS CINLOSTREASONNAME,  \r\n CONVERT(decimal(40), null) AS FLOSTQUANTITY,CONVERT(decimal(40), null) AS FLOSTNUM,CONVERT(NVARCHAR(60), N'') as CLOSTREASONCODE,CONVERT(NVARCHAR(60), N'') as CLOSTREASONNAME,  \r\n V_HY_RECEIVEDETAIL.IUSEDVOUCHAUTOID,V_HY_RECEIVEDETAIL.CUSEDVOUCHCODE,  \r\n        V_HY_RECEIVEDETAIL.HYCODE AS CHYORDERCODE,V_HY_RECEIVEDETAIL.HYDID AS IHYORDERDID,V_HY_RECEIVEDETAIL.MOCODE AS CMOORDERCODE,V_HY_RECEIVEDETAIL.MOSEQ AS IMOORDERSEQ,  \r\n V_HY_RECEIVEDETAIL.MODEPTCODE AS CPRODEPCODE,CONVERT(nvarchar(30),V_HY_RECEIVEDETAIL.MODEPTNAME) AS CPRODEPNAME,V_HY_RECEIVEDETAIL.MOLOTCODE AS CMOLOT,  \r\n V_HY_RECEIVE.IVTID,INVENTORY.IID AS CINVAUTHID,VENDOR.IID AS CVENAUTHID,  \r\n V_HY_RECEIVEDETAIL.CITEM_CLASS ,V_HY_RECEIVEDETAIL.CITEM_NAME,V_HY_RECEIVEDETAIL.CITEMCODE,V_HY_RECEIVEDETAIL.CITEMNAME  ,V_HY_RECEIVEDETAIL.pfcode\r\n        FROM V_HY_RECEIVE    \r\n        INNER JOIN V_HY_RECEIVEDETAIL ON V_HY_RECEIVEDETAIL.RECEIVEID=V_HY_RECEIVE.RECEIVEID   \r\n        left JOIN HY_USEDBODY ON HY_USEDBODY.AUTOID=V_HY_RECEIVEDETAIL.IUSEDVOUCHAUTOID   \r\n LEFT JOIN INVENTORY ON INVENTORY.CINVCODE=V_HY_RECEIVEDETAIL.INVCODE  \r\n LEFT JOIN VENDOR ON VENDOR.CVENCODE=V_HY_RECEIVE.CVENCODE  \r\n LEFT JOIN DEPARTMENT ON DEPARTMENT.CDEPCODE=V_HY_RECEIVE.CDEPCODE  \r\n LEFT JOIN PERSON ON PERSON.CPERSONCODE=V_HY_RECEIVE.CPERSONCODE  \r\n --INNER JOIN HY_USEDHEAD ON HY_USEDHEAD.CCODE=V_HY_RECEIVEDETAIL.CUSEDVOUCHCODE","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HY_SEEKRECEIVE"},{"field":"Type","value":"View"}],"columns":[{"id":"column-231026","object_id":"column-231026","name":"IVOUCHTYPE","name_without_path":"IVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231027","object_id":"column-231027","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231028","object_id":"column-231028","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231029","object_id":"column-231029","name":"CCODE","name_without_path":"CCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231030","object_id":"column-231030","name":"DDATE","name_without_path":"DDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231031","object_id":"column-231031","name":"CPERSONCODE","name_without_path":"CPERSONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231032","object_id":"column-231032","name":"CPERSONNAME","name_without_path":"CPERSONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231033","object_id":"column-231033","name":"CMAKER","name_without_path":"CMAKER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231034","object_id":"column-231034","name":"COPCODE","name_without_path":"COPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231035","object_id":"column-231035","name":"CDESCRIPTION","name_without_path":"CDESCRIPTION","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231036","object_id":"column-231036","name":"CINVCODE","name_without_path":"CINVCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"240","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231037","object_id":"column-231037","name":"CINVNAME","name_without_path":"CINVNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231038","object_id":"column-231038","name":"CDEPCODE","name_without_path":"CDEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231039","object_id":"column-231039","name":"CDEPNAME","name_without_path":"CDEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231040","object_id":"column-231040","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231041","object_id":"column-231041","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231042","object_id":"column-231042","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231043","object_id":"column-231043","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231044","object_id":"column-231044","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231045","object_id":"column-231045","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231046","object_id":"column-231046","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231047","object_id":"column-231047","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231048","object_id":"column-231048","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231049","object_id":"column-231049","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231050","object_id":"column-231050","name":"CINVSTD","name_without_path":"CINVSTD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231051","object_id":"column-231051","name":"CCOMUNITCODE","name_without_path":"CCOMUNITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231052","object_id":"column-231052","name":"CCOMUNITNAME","name_without_path":"CCOMUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231053","object_id":"column-231053","name":"CUNITID","name_without_path":"CUNITID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"70","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231054","object_id":"column-231054","name":"CUNITNAME","name_without_path":"CUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231055","object_id":"column-231055","name":"FCHANGERATE","name_without_path":"FCHANGERATE","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231056","object_id":"column-231056","name":"CVENABBNAME","name_without_path":"CVENABBNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231057","object_id":"column-231057","name":"CVENCODE","name_without_path":"CVENCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231058","object_id":"column-231058","name":"CVENNAME","name_without_path":"CVENNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231059","object_id":"column-231059","name":"FQTY","name_without_path":"FQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231060","object_id":"column-231060","name":"FNUM","name_without_path":"FNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231061","object_id":"column-231061","name":"QUALIFIEDQTY","name_without_path":"QUALIFIEDQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231062","object_id":"column-231062","name":"AUXQUALIFIEDQTY","name_without_path":"AUXQUALIFIEDQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231063","object_id":"column-231063","name":"QUALIFIEDREASON","name_without_path":"QUALIFIEDREASON","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231064","object_id":"column-231064","name":"QUALIFIEDREASONNAME","name_without_path":"QUALIFIEDREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231065","object_id":"column-231065","name":"FMASCRAPQTY","name_without_path":"FMASCRAPQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231066","object_id":"column-231066","name":"FMASCRAPNUM","name_without_path":"FMASCRAPNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231067","object_id":"column-231067","name":"CMASCRAPREASONCODE","name_without_path":"CMASCRAPREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231068","object_id":"column-231068","name":"CMASCRAPREASONNAME","name_without_path":"CMASCRAPREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231069","object_id":"column-231069","name":"FOPSCRAPNUM","name_without_path":"FOPSCRAPNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231070","object_id":"column-231070","name":"FOPSCRAPQTY","name_without_path":"FOPSCRAPQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231071","object_id":"column-231071","name":"COPSCRAPREASONCODE","name_without_path":"COPSCRAPREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231072","object_id":"column-231072","name":"COPSCRAPREASONNAME","name_without_path":"COPSCRAPREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231073","object_id":"column-231073","name":"FREDOQUANTITY","name_without_path":"FREDOQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231074","object_id":"column-231074","name":"FREDONUM","name_without_path":"FREDONUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231075","object_id":"column-231075","name":"CREDOREASONCODE","name_without_path":"CREDOREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231076","object_id":"column-231076","name":"CREDOREASONNAME","name_without_path":"CREDOREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231077","object_id":"column-231077","name":"FINLOSTQUANTITY","name_without_path":"FINLOSTQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231078","object_id":"column-231078","name":"FINLOSTNUM","name_without_path":"FINLOSTNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231079","object_id":"column-231079","name":"CINLOSTREASONCODE","name_without_path":"CINLOSTREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231080","object_id":"column-231080","name":"CINLOSTREASONNAME","name_without_path":"CINLOSTREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231081","object_id":"column-231081","name":"FLOSTQUANTITY","name_without_path":"FLOSTQUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231082","object_id":"column-231082","name":"FLOSTNUM","name_without_path":"FLOSTNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231083","object_id":"column-231083","name":"CLOSTREASONCODE","name_without_path":"CLOSTREASONCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231084","object_id":"column-231084","name":"CLOSTREASONNAME","name_without_path":"CLOSTREASONNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231085","object_id":"column-231085","name":"IUSEDVOUCHAUTOID","name_without_path":"IUSEDVOUCHAUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231086","object_id":"column-231086","name":"CUSEDVOUCHCODE","name_without_path":"CUSEDVOUCHCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231087","object_id":"column-231087","name":"CHYORDERCODE","name_without_path":"CHYORDERCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231088","object_id":"column-231088","name":"IHYORDERDID","name_without_path":"IHYORDERDID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231089","object_id":"column-231089","name":"CMOORDERCODE","name_without_path":"CMOORDERCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231090","object_id":"column-231090","name":"IMOORDERSEQ","name_without_path":"IMOORDERSEQ","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231091","object_id":"column-231091","name":"CPRODEPCODE","name_without_path":"CPRODEPCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231092","object_id":"column-231092","name":"CPRODEPNAME","name_without_path":"CPRODEPNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231093","object_id":"column-231093","name":"CMOLOT","name_without_path":"CMOLOT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231094","object_id":"column-231094","name":"IVTID","name_without_path":"IVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231095","object_id":"column-231095","name":"CINVAUTHID","name_without_path":"CINVAUTHID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231096","object_id":"column-231096","name":"CVENAUTHID","name_without_path":"CVENAUTHID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231097","object_id":"column-231097","name":"CITEM_CLASS","name_without_path":"CITEM_CLASS","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231098","object_id":"column-231098","name":"CITEM_NAME","name_without_path":"CITEM_NAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231099","object_id":"column-231099","name":"CITEMCODE","name_without_path":"CITEMCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231100","object_id":"column-231100","name":"CITEMNAME","name_without_path":"CITEMNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-231101","object_id":"column-231101","name":"pfcode","name_without_path":"pfcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};