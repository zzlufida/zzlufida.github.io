window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12399","name":"SR_VIEW_FITTING_LISTJZ","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE         VIEW SR_VIEW_FITTING_LISTJZ            \r\nAS          \r\n            \r\n SELECT CONVERT(CHAR, CONVERT(MONEY, SR_FITTINGS.UFTS),2) AS UFTS,SR_FITTINGS.IFATHERID AS IFATHERID,SR_FITTINGS.CINVCODE,SR_FITTINGS.CINVSN,SR_FITTINGS.CSERVICEOID AS CSERVICEOID,            \r\n SR_FITTINGS.DDATE         \r\n  AS DDATE, INVENTORY.CINVNAME,INVENTORY.CINVSTD AS CINVSTD,UNIT2.CCOMUNITCODE,UNIT2.CCOMUNITNAME,CSOURCE AS CTYPE,SR_FITTINGS.ID AS ID  , CSERVICECODE  AS CBSERVICEOID , SR_SERVICEBILL.CSERBILLCODE AS CSERVICECODE,  \r\n  SR_FITTINGS.CSNDEFINE1,SR_FITTINGS.CSNDEFINE2,SR_FITTINGS.CSNDEFINE3,SR_FITTINGS.CSNDEFINE4,SR_FITTINGS.CSNDEFINE5,SR_FITTINGS.CSNDEFINE6,SR_FITTINGS.CSNDEFINE7,SR_FITTINGS.CSNDEFINE8,SR_FITTINGS.CSNDEFINE9,SR_FITTINGS.CSNDEFINE10,  \r\nSR_FITTINGS.CFREE1,SR_FITTINGS.CFREE2,SR_FITTINGS.CFREE3,SR_FITTINGS.CFREE4,SR_FITTINGS.CFREE5,SR_FITTINGS.CFREE6,SR_FITTINGS.CFREE7,SR_FITTINGS.CFREE8,SR_FITTINGS.CFREE9,SR_FITTINGS.CFREE10,SR_FITTINGS.CBATCH,SR_FITTINGS.CBATCHPROPERTY1,\r\nSR_FITTINGS.CBATCHPROPERTY2,  \r\nSR_FITTINGS.CBATCHPROPERTY3,SR_FITTINGS.CBATCHPROPERTY4,SR_FITTINGS.CBATCHPROPERTY5,SR_FITTINGS.CBATCHPROPERTY6,SR_FITTINGS.CBATCHPROPERTY7,SR_FITTINGS.CBATCHPROPERTY8,SR_FITTINGS.CBATCHPROPERTY9,SR_FITTINGS.CBATCHPROPERTY10,  \r\nCINVDEFINE1,CINVDEFINE2,CINVDEFINE3,CINVDEFINE4,CINVDEFINE5,CINVDEFINE6,CINVDEFINE7,CINVDEFINE8,CINVDEFINE9,CINVDEFINE10,\r\nINVENTORY.BINVBATCH,INVENTORY.BSERIAL  \r\n FROM SR_FITTINGS             \r\n LEFT JOIN INVENTORY ON INVENTORY.CINVCODE=SR_FITTINGS.CINVCODE            \r\n LEFT JOIN COMPUTATIONUNIT AS UNIT2 ON INVENTORY.CCOMUNITCODE=UNIT2.CCOMUNITCODE    \r\n LEFT JOIN SR_SERVICEBILLDETAIL ON  SR_SERVICEBILLDETAIL.OID= SR_FITTINGS.CSERVICECODE      \r\n LEFT JOIN SR_SERVICEBILL ON SR_SERVICEBILL.OID=   SR_SERVICEBILLDETAIL.SERBILLID     \r\n    \r\n  UNION ALL             \r\n  \r\n SELECT CONVERT(CHAR, CONVERT(MONEY, INVENTORY.PUBUFTS),2)  AS UFTS,ST_SNARCHIVES_SNDETAILS.IFATHERID,ST_SNARCHIVES_SNDETAILS.CINVCODE,ST_SNARCHIVES_SNDETAILS.CINVSN,N'' AS CSERVICEOID,             \r\n NULL AS DDATE, INVENTORY.CINVNAME,INVENTORY.CINVSTD AS CINVSTD,UNIT2.CCOMUNITCODE,UNIT2.CCOMUNITNAME,2 AS CTYPE,''AS ID  ,''as cbServiceoid,'' as cServiceCode,  \r\n    ST_SNARCHIVES_SNDETAILS.CSNDEFINE1,ST_SNARCHIVES_SNDETAILS.CSNDEFINE2,ST_SNARCHIVES_SNDETAILS.CSNDEFINE3,ST_SNARCHIVES_SNDETAILS.CSNDEFINE4,ST_SNARCHIVES_SNDETAILS.CSNDEFINE5,ST_SNARCHIVES_SNDETAILS.CSNDEFINE6,ST_SNARCHIVES_SNDETAILS.CSNDEFINE7,\r\n    ST_SNARCHIVES_SNDETAILS.CSNDEFINE8,ST_SNARCHIVES_SNDETAILS.CSNDEFINE9,ST_SNARCHIVES_SNDETAILS.CSNDEFINE10,  \r\nST_SNARCHIVES_SNDETAILS.CFREE1,ST_SNARCHIVES_SNDETAILS.CFREE2,ST_SNARCHIVES_SNDETAILS.CFREE3,ST_SNARCHIVES_SNDETAILS.CFREE4,ST_SNARCHIVES_SNDETAILS.CFREE5,ST_SNARCHIVES_SNDETAILS.CFREE6,ST_SNARCHIVES_SNDETAILS.CFREE7,ST_SNARCHIVES_SNDETAILS.CFREE8,\r\nST_SNARCHIVES_SNDETAILS.CFREE9,ST_SNARCHIVES_SNDETAILS.CFREE10,ST_SNARCHIVES_SNDETAILS.CBATCH,BP.CBATCHPROPERTY1,BP.CBATCHPROPERTY2,  \r\nBP.CBATCHPROPERTY3,BP.CBATCHPROPERTY4,BP.CBATCHPROPERTY5,BP.CBATCHPROPERTY6,BP.CBATCHPROPERTY7,BP.CBATCHPROPERTY8,BP.CBATCHPROPERTY9,BP.CBATCHPROPERTY10,  \r\nCINVDEFINE1,CINVDEFINE2,CINVDEFINE3,CINVDEFINE4,CINVDEFINE5,CINVDEFINE6,CINVDEFINE7,CINVDEFINE8,CINVDEFINE9,CINVDEFINE10 ,\r\nINVENTORY.BINVBATCH,INVENTORY.BSERIAL   \r\n FROM ST_SNARCHIVES_SNDETAILS             \r\n LEFT JOIN INVENTORY ON INVENTORY.CINVCODE=ST_SNARCHIVES_SNDETAILS.CINVCODE            \r\n LEFT JOIN COMPUTATIONUNIT AS UNIT2 ON INVENTORY.CCOMUNITCODE=UNIT2.CCOMUNITCODE    \r\n left join AA_BatchProperty AS BP on  ST_SNARCHIVES_SNDETAILS.cbatch =BP.cBatch and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE1=BP.cFree1  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE2 =BP.cFree2  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE3 =BP.cFree3  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE4 =BP.cFree4  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE5=BP.cFree5  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE6=BP.cFree6  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE7=BP.cFree7  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE8=BP.cFree8  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE9=BP.cFree9  and   \r\n ST_SNARCHIVES_SNDETAILS.CFREE10   =BP.cFree10    \r\n          \r\n UNION ALL            \r\n             \r\n SELECT CONVERT(CHAR, CONVERT(MONEY, INVENTORY.PUBUFTS),2)  AS UFTS,N'' AS IFATHERID,ST_SNDETAIL_OTHEROUT.CINVCODE,ST_SNDETAIL_OTHEROUT.CINVSN,RDRECORDS.CSERVICEOID,            \r\n RDRECORD.DDATE AS DDATE,INVENTORY.CINVNAME,INVENTORY.CINVSTD AS CINVSTD,UNIT2.CCOMUNITCODE,UNIT2.CCOMUNITNAME,3 AS CTYPE ,'' AS ID   ,RDRECORDS.cbServiceoid as cbServiceoid,RDRECORD.cCode as cServiceCode,  \r\n  ST_SNSTATE.CSNDEFINE1,ST_SNSTATE.CSNDEFINE2,ST_SNSTATE.CSNDEFINE3,ST_SNSTATE.CSNDEFINE4,ST_SNSTATE.CSNDEFINE5,ST_SNSTATE.CSNDEFINE6,ST_SNSTATE.CSNDEFINE7,ST_SNSTATE.CSNDEFINE8,ST_SNSTATE.CSNDEFINE9,ST_SNSTATE.CSNDEFINE10,  \r\n ST_SNSTATE.CFREE1,ST_SNSTATE.CFREE2,ST_SNSTATE.CFREE3,ST_SNSTATE.CFREE4,ST_SNSTATE.CFREE5,ST_SNSTATE.CFREE6,ST_SNSTATE.CFREE7,ST_SNSTATE.CFREE8,ST_SNSTATE.CFREE9,ST_SNSTATE.CFREE10,ST_SNSTATE.CBATCH,BP.CBATCHPROPERTY1,BP.CBATCHPROPERTY2,  \r\nBP.CBATCHPROPERTY3,BP.CBATCHPROPERTY4,BP.CBATCHPROPERTY5,BP.CBATCHPROPERTY6,BP.CBATCHPROPERTY7,BP.CBATCHPROPERTY8,BP.CBATCHPROPERTY9,BP.CBATCHPROPERTY10,  \r\nCINVDEFINE1,CINVDEFINE2,CINVDEFINE3,CINVDEFINE4,CINVDEFINE5,CINVDEFINE6,CINVDEFINE7,CINVDEFINE8,CINVDEFINE9,CINVDEFINE10 ,\r\nINVENTORY.BINVBATCH,INVENTORY.BSERIAL   \r\n        FROM   RDRECORD09 RDRECORD              \r\n LEFT JOIN RDRECORDS09 RDRECORDS ON RDRECORDS.ID=RDRECORD.ID              \r\n INNER JOIN ST_SNDETAIL_OTHEROUT ON RDRECORDS.AUTOID=ST_SNDETAIL_OTHEROUT.IVOUCHSID            \r\n LEFT JOIN ST_SNSTATE  ON ST_SNDETAIL_OTHEROUT.CINVSN=ST_SNSTATE.CINVSN AND ST_SNDETAIL_OTHEROUT.CINVCODE=ST_SNSTATE.CINVCODE AND ST_SNDETAIL_OTHEROUT.ISNOPERATECOUNT=ST_SNSTATE.ISNOPERATECOUNT             \r\n LEFT JOIN INVENTORY ON INVENTORY.CINVCODE=ST_SNDETAIL_OTHEROUT.CINVCODE            \r\n LEFT JOIN COMPUTATIONUNIT AS UNIT2 ON INVENTORY.CCOMUNITCODE=UNIT2.CCOMUNITCODE  \r\n left join AA_BatchProperty AS BP on  ST_SNSTATE.cbatch =BP.cBatch and   \r\n ST_SNSTATE.CFREE1=BP.cFree1  and   \r\n ST_SNSTATE.CFREE2 =BP.cFree2  and   \r\n ST_SNSTATE.CFREE3 =BP.cFree3  and   \r\n ST_SNSTATE.CFREE4 =BP.cFree4  and   \r\n ST_SNSTATE.CFREE5=BP.cFree5  and   \r\n ST_SNSTATE.CFREE6=BP.cFree6  and   \r\n ST_SNSTATE.CFREE7=BP.cFree7  and   \r\n ST_SNSTATE.CFREE8=BP.cFree8  and   \r\n ST_SNSTATE.CFREE9=BP.cFree9  and   \r\n ST_SNSTATE.CFREE10   =BP.cFree10              \r\n WHERE RDRECORD.CBUSTYPE='服务配件领用' AND ST_SNSTATE.ISNSTATE=4  and  ST_SNDETAIL_OTHEROUT.CINVSN not in (select SR_FITTINGS.CINVSN from SR_FITTINGS where SR_FITTINGS.CINVCODE=ST_SNDETAIL_OTHEROUT.CINVCODE)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SR_VIEW_FITTING_LISTJZ"},{"field":"Type","value":"View"}],"columns":[{"id":"column-302953","object_id":"column-302953","name":"UFTS","name_without_path":"UFTS","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302954","object_id":"column-302954","name":"IFATHERID","name_without_path":"IFATHERID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302955","object_id":"column-302955","name":"CINVCODE","name_without_path":"CINVCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302956","object_id":"column-302956","name":"CINVSN","name_without_path":"CINVSN","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"400","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302957","object_id":"column-302957","name":"CSERVICEOID","name_without_path":"CSERVICEOID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302958","object_id":"column-302958","name":"DDATE","name_without_path":"DDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302959","object_id":"column-302959","name":"CINVNAME","name_without_path":"CINVNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302960","object_id":"column-302960","name":"CINVSTD","name_without_path":"CINVSTD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302961","object_id":"column-302961","name":"CCOMUNITCODE","name_without_path":"CCOMUNITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302962","object_id":"column-302962","name":"CCOMUNITNAME","name_without_path":"CCOMUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302963","object_id":"column-302963","name":"CTYPE","name_without_path":"CTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302964","object_id":"column-302964","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302965","object_id":"column-302965","name":"CBSERVICEOID","name_without_path":"CBSERVICEOID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302966","object_id":"column-302966","name":"CSERVICECODE","name_without_path":"CSERVICECODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302967","object_id":"column-302967","name":"CSNDEFINE1","name_without_path":"CSNDEFINE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302968","object_id":"column-302968","name":"CSNDEFINE2","name_without_path":"CSNDEFINE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302969","object_id":"column-302969","name":"CSNDEFINE3","name_without_path":"CSNDEFINE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302970","object_id":"column-302970","name":"CSNDEFINE4","name_without_path":"CSNDEFINE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302971","object_id":"column-302971","name":"CSNDEFINE5","name_without_path":"CSNDEFINE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302972","object_id":"column-302972","name":"CSNDEFINE6","name_without_path":"CSNDEFINE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302973","object_id":"column-302973","name":"CSNDEFINE7","name_without_path":"CSNDEFINE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302974","object_id":"column-302974","name":"CSNDEFINE8","name_without_path":"CSNDEFINE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302975","object_id":"column-302975","name":"CSNDEFINE9","name_without_path":"CSNDEFINE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302976","object_id":"column-302976","name":"CSNDEFINE10","name_without_path":"CSNDEFINE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302977","object_id":"column-302977","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302978","object_id":"column-302978","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302979","object_id":"column-302979","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302980","object_id":"column-302980","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302981","object_id":"column-302981","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302982","object_id":"column-302982","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302983","object_id":"column-302983","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302984","object_id":"column-302984","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302985","object_id":"column-302985","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302986","object_id":"column-302986","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302987","object_id":"column-302987","name":"CBATCH","name_without_path":"CBATCH","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302988","object_id":"column-302988","name":"CBATCHPROPERTY1","name_without_path":"CBATCHPROPERTY1","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302989","object_id":"column-302989","name":"CBATCHPROPERTY2","name_without_path":"CBATCHPROPERTY2","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302990","object_id":"column-302990","name":"CBATCHPROPERTY3","name_without_path":"CBATCHPROPERTY3","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302991","object_id":"column-302991","name":"CBATCHPROPERTY4","name_without_path":"CBATCHPROPERTY4","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302992","object_id":"column-302992","name":"CBATCHPROPERTY5","name_without_path":"CBATCHPROPERTY5","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302993","object_id":"column-302993","name":"CBATCHPROPERTY6","name_without_path":"CBATCHPROPERTY6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302994","object_id":"column-302994","name":"CBATCHPROPERTY7","name_without_path":"CBATCHPROPERTY7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302995","object_id":"column-302995","name":"CBATCHPROPERTY8","name_without_path":"CBATCHPROPERTY8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302996","object_id":"column-302996","name":"CBATCHPROPERTY9","name_without_path":"CBATCHPROPERTY9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302997","object_id":"column-302997","name":"CBATCHPROPERTY10","name_without_path":"CBATCHPROPERTY10","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302998","object_id":"column-302998","name":"CINVDEFINE1","name_without_path":"CINVDEFINE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-302999","object_id":"column-302999","name":"CINVDEFINE2","name_without_path":"CINVDEFINE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303000","object_id":"column-303000","name":"CINVDEFINE3","name_without_path":"CINVDEFINE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303001","object_id":"column-303001","name":"CINVDEFINE4","name_without_path":"CINVDEFINE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303002","object_id":"column-303002","name":"CINVDEFINE5","name_without_path":"CINVDEFINE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303003","object_id":"column-303003","name":"CINVDEFINE6","name_without_path":"CINVDEFINE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303004","object_id":"column-303004","name":"CINVDEFINE7","name_without_path":"CINVDEFINE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303005","object_id":"column-303005","name":"CINVDEFINE8","name_without_path":"CINVDEFINE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303006","object_id":"column-303006","name":"CINVDEFINE9","name_without_path":"CINVDEFINE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303007","object_id":"column-303007","name":"CINVDEFINE10","name_without_path":"CINVDEFINE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303008","object_id":"column-303008","name":"BINVBATCH","name_without_path":"BINVBATCH","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-303009","object_id":"column-303009","name":"BSERIAL","name_without_path":"BSERIAL","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};